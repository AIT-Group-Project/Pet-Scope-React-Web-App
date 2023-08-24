import React, {  useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/AuthProvider';
import PlayDateContext from '../../contexts/PlayDateContextProvider';
import axios from '../../api/axios';
const USERS_URL = '/users';

const PDReceiverDropdown = () => {
    // this currently dose not function as intended useEffect is only triggered on mount and not re-render
    const { auth } = useContext(AuthContext);
    const { allUsersList, setAllUsersList } = useContext(PlayDateContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getAllUsers = async () => {
            if (!auth.accessToken) {
                console.error("Access token is not available.");
                // Handle missing token scenario, like triggering re-login
                return;
            }

            try {
                const response = await axios.get(USERS_URL ,
                    {
                        headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${auth.accessToken}`
                    },
                        withCredentials: true
                })
                // set list here
                setAllUsersList(response.data);
                setLoading(false);
    
            } catch (error) {
                console.error('Failed to get users', error)
            }
        };

        getAllUsers();

    }, [auth.accessToken, setAllUsersList]);


    return (
        <div className='w-full flex'>
            <div className='mx-auto m-2'>
                {loading ? (
                    <div>Loading...</div>
                    ) : (
                    <div>
                        <p>Select a User</p>
                        <select>
                            {Object.entries(allUsersList).map((key, val) => (
                            <option key={key} value={val} id={val?.user_id}>{`${val?.first_name} ${val?.last_name}`}</option>
                        ))}
                        </select>
                    </div>
                )}
            </div>
        </div>
    )
};

export default PDReceiverDropdown;