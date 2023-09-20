import { useContext, useEffect} from 'react';
import axios from "../api/axios";
import AuthContext from '../contexts/AuthProvider';
import UserContext from '../contexts/UserProvider';
const USERS_URL = '/users';
const REFRESH_URL = '/refresh';

const UserData = () => {

    const { auth, setAuth } = useContext(AuthContext);
    const { userData, setUserData} = useContext(UserContext)
    const { user, setUser} = useContext(UserContext);

    useEffect( () => {

        const getUserData = async () => {

            if (user === true) {
                console.error("User Info Already logged")
                return;
            }
            if (!auth.accessToken) {
                console.error("Access token is not avaliable")
                return;
            }
            try {
                //sends a request to get the invites for the currently logged in
                const getUserData = await axios.get(`${USERS_URL}/${auth.userId}` , {
                    headers: {'Authorization': `Bearer ${auth.accessToken}`},
                    withCredentials: true
                 })
                console.log('response' , getUserData.data)

                const { 
                    user_id, 
                    first_name, 
                    last_name, 
                    contact_phone_number, 
                    email, 
                    suburb, 
                    postcode, 
                    dog_cat, 
                    pet_name, 
                    pet_breed, 
                    pet_age, 
                    pet_gender, 
                } = getUserData.data[0];

                setUserData(prevUserData => ({
                    ...prevUserData,
                    user_id, 
                    first_name, 
                    last_name, 
                    contact_phone_number, 
                    email, 
                    suburb, 
                    postcode, 
                    dog_cat, 
                    pet_name, 
                    pet_breed, 
                    pet_age, 
                    pet_gender, 
                }));
                setUser(true);

            } catch (error) {
                // handle getting new accessToken from refresh endpoint using cookie.jwt: refreshToken
                if (error.response.status === 403) {
                    console.log('entering status === 403 response handle') // debug
                    try {
                        // sends all cookies with the request and if the cookie.jwt refreshToken 
                        // is valid a new accessToken will be issued in the response
                        const newAccessTokenResponse = await axios.get(REFRESH_URL, {
                            withCredentials: true 
                        })
                    // when setting a single value in a state of object type
                    // you must destructure/spread the current object or else it will
                    // overwrite the state with a new object only holding only the single value eg.{[key,val]}
                    setAuth({...auth, accessToken: newAccessTokenResponse.data.accessToken});
                    console.log('new Access Token acquired'); // debug
                    } catch (error) {
                        console.error('Failed to get new Access Token', error);
                    }
                }
                console.error('Failed to get users', error);
            }
        };
        getUserData();
    }, [auth, setAuth, setUser, user, setUserData]);
    console.log(userData.pet_name)
    return("")
}
export default UserData;