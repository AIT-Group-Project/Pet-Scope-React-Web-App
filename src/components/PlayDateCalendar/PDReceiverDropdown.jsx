import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/AuthProvider';
import PlayDateContext from '../../contexts/PlayDateContextProvider';
import axios from '../../api/axios';
const USERS_URL = '/users';
const REFRESH_URL = '/refresh';

const PDReceiverDropdown = () => {
    // state variables
    const { auth, setAuth } = useContext(AuthContext);
    const { allUsersMap, setAllUsersMap, setSelectedReceiver } = useContext(PlayDateContext);
    const [ loading, setLoading ] = useState(true);

    // the useEffect hook allows execution of code when a component is mounted, rendered or dependent state is updated. the dependent states are defined at the end of the useEffect in a dependencies array. if you want the useEffect to only execute on mount leave dependencies array empty, and if you want useEffect to run on mount and every render of the component remove the dependencies array
    useEffect(() => {
        // declare function
        const getAllUsers = async () => {
            // Handle missing token
            if (!auth.accessToken) {
                console.error("Access token is not available.");
                return;
            }
            try {
                // get json format of all users in the vetdata.users table {user_id, first_name, last_name}
                const allUsersResponse = await axios.get(USERS_URL, {
                        headers: {'Authorization': `Bearer ${auth.accessToken}`},
                        withCredentials: true
                })
                console.log('response', allUsersResponse); // debug
                // take the response json of all the users and store this in state setAllUsersMap
                setAllUsersMap(allUsersResponse.data);
                // change loading state to display dropdown box with all users mapped over the options
                setLoading(false);
            } catch (error) {
                // handle getting new accessToken from refresh endpoint using cookie.jwt: refreshToken
                if (error.response.status === 403) {
                    console.log('403 res /users') // debug
                    const newAccessTokenResponse = await axios.get(REFRESH_URL, {
                        withCredentials: true 
                    })
                        // when setting a single value in for a state of object type you must destructure the current object or else it will overwrite the state with a new object only holding the single value eg.{[key,val]}
                    setAuth({...auth, accessToken: newAccessTokenResponse.data.accessToken});
                    console.log('new accessToken'); // debug
                }
                console.error('Failed to get users', error);
            }
        };
        // call function
        getAllUsers();
        // when states in the dependencies array change execute useEffect()
    }, [auth, setAuth, setAllUsersMap]);

    const handleOptionSelect = (event) => {
        // sets state to the user_id of the receiver of the playdate
        setSelectedReceiver(event.target.id);
    };

    return (
        <div className='w-full flex'>
            <div className='mx-auto m-2'>
                {loading ? (
                    <div>Loading...</div>
                    ) : (
                    <div>
                        <p>Select a User</p>
                        <select onChange={handleOptionSelect}>
                            {Object.entries(allUsersMap).map(([key, val]) => (
                            <option key={key} value={val} id={val.user_id}>{`${val.first_name} ${val.last_name}`}</option>
                        ))}
                        </select>
                    </div>
                )}
            </div>
        </div>
    )
};

export default PDReceiverDropdown;