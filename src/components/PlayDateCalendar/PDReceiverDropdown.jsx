import React, {  useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/AuthProvider';
import PlayDateContext from '../../contexts/PlayDateContextProvider';
import axios from '../../api/axios';
const USERS_URL = '/users';
const REFRESH_URL = '/refresh';

const PDReceiverDropdown = () => {
    // this currently dose not function as intended useEffect is only triggered on mount and not re-render
    const { auth, setAuth } = useContext(AuthContext);
    const { allUsersList, setAllUsersList } = useContext(PlayDateContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAllUsers = async () => {
            // Handle missing token
            if (!auth.accessToken) {
                console.error("Access token is not available.");
                return;
            }
            try {
                const allUsersResponse = await axios.get(USERS_URL ,
                    {
                        headers: { 
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${auth.accessToken}`
                        },
                        withCredentials: true
                })
                // set allUsersList of users from allUsersResponse
                console.log('response', allUsersResponse) // debug
                setAllUsersList(allUsersResponse.data);
                setLoading(false);
            } catch (error) {
                // handle get new accessToken from refresh endpoint
                if (error.response.status === 403) {
                    console.log('403 res /users') // debug
                    const newAccessTokenResponse = await axios.get(REFRESH_URL,
                        {
                            headers: { 'Content-Type': 'application/json' },
                            withCredentials: true
                        })
                    setAuth({...auth, accessToken: newAccessTokenResponse.data.accessToken})
                    console.log('new accessToken') // debug
                }
                console.error('Failed to get users', error)
            }
        };
        getAllUsers();
    }, [auth, setAuth, setAllUsersList]);

    return (
        <div className='w-full flex'>
            <div className='mx-auto m-2'>
                {loading ? (
                    <div>Loading...</div>
                    ) : (
                    <div>
                        <p>Select a User</p>
                        <select>
                            {Object.entries(allUsersList).map(([key, val]) => (
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