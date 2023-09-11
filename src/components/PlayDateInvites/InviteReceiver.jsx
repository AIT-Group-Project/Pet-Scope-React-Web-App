import React, { useContext, useEffect, useState, useRef } from 'react';
import AuthContext from '../../contexts/AuthProvider';
import PlayDateInviteContext from '../../contexts/PlayDateInviteContextProvider';
import axios from '../../api/axios';
const INVITE_URL = '/invite';
const REFRESH_URL = '/refresh';

const InviteReceiver = () => {

    const { auth, setAuth } = useContext(AuthContext);
    const {allInvitesMap, setAllInvitesMap, setSelectedInvite } = useContext(PlayDateInviteContext);
    const selectedOption = useRef(null)

    useEffect( () => {

        const getAllInvites = async () => {

            if (!auth.accessToken) {
                console.error("Access token is not avaliable")
                return;
            }
            try {
                //sends a request to get the invites for the currently logged in
                const allInviteResponse = await axios.get(INVITE_URL, {
                    headers: {'Authorization': `Bearer ${auth.accessToken}`}, 
                    params: {'userId': `${auth.userId}`}, 
                    withCredentials: true
                })
                //console.log(auth.userId)
                console.log('response' , allInviteResponse)

                setAllInvitesMap(allInviteResponse.data);

            } catch (error) {}
            // {
            //     // handle getting new accessToken from refresh endpoint using cookie.jwt: refreshToken
            //     if (error.response.status === 403) {
            //         console.log('entering status === 403 response handle') // debug
            //         try {
            //             // sends all cookies with the request and if the cookie.jwt refreshToken 
            //             // is valid a new accessToken will be issued in the response
            //             const newAccessTokenResponse = await axios.get(REFRESH_URL, {
            //                 withCredentials: true 
            //             })
            //         // when setting a single value in a state of object type
            //         // you must destructure/spread the current object or else it will
            //         // overwrite the state with a new object only holding only the single value eg.{[key,val]}
            //         setAuth({...auth, accessToken: newAccessTokenResponse.data.accessToken});
            //         console.log('new Access Token acquired'); // debug
            //         } catch (error) {
            //             console.error('Failed to get new Access Token', error);
            //         }
            //     }
            //     console.error('Failed to get users', error);
            // }

        };
        getAllInvites();
    }, [auth, setAuth, setAllInvitesMap] )
    
    const handleSelectedRecivier = () => {
        let v1 = selectedOption.current.value.split('|');
        setSelectedInvite({display: v1[0], database: v1[1]});
    };

    return (
        <>
            {
                <>
                    <div className='w-full flex'>
                        <div className='mx-auto m-2'>
                            {
                                <div>
                                    <p className='font-semibold text-xl dark:text-white text-center'>Select a User</p>
                                    <select ref={selectedOption} onChange={() => handleSelectedRecivier()} className='py-1 px-5'>
                                        <option value="-1" selected disabled hidden>Please Select A User</option>
                                        {Object.entries(allInvitesMap).map(([key, val]) => (
                                        <option key={key} value={`${val.play_date_id} ${val.sender_user_id} ${val.reciver_user_id} ${val.play_date} ${val.play_time} | ${val.confirmed}`}>{`${val.sender_user_id} ${val.reciver_user_id} ${val.play_date} ${val.play_time} ${val.confirmed}`}</option>
                                    ))}
                                    </select>
                                    
                                </div>
                            }
                        </div>
                    </div>
                </>
            }
        </>
        )

}
export default InviteReceiver;