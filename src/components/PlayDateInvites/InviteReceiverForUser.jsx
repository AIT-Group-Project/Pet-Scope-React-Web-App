import { PDDisplayReceivedForUser } from '..';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/AuthProvider';
import PlayDateContext from '../../contexts/PlayDateContextProvider';
import axios from '../../api/axios';
const PLAYDATES_URL = '/playdate';
const REFRESH_URL = '/refresh';

const InviteReceiverForUser = () => {

    const { auth, setAuth } = useContext(AuthContext);
    const { reveiverPlayDateMap, setReveiverPlayDateMap }  = useContext(PlayDateContext);
    const [ loading, setLoading ] = useState(true);

    useEffect( () => {

        const getPlayDates = async () => {

            if (!auth.accessToken) {
                console.error("Access token is not avaliable")
                return;
            }
            try {
                //sends a request to get the invites the currently logged in has sent
                const getUsersPlayDates = await axios.get(`${PLAYDATES_URL}/${auth.userId}/${auth.userId}`, {
                    headers: {'Authorization': `Bearer ${auth.accessToken}`}, 
                    withCredentials: true
                })
                console.log('response' , getUsersPlayDates)

                setReveiverPlayDateMap(getUsersPlayDates.data);
                setLoading(false);

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
        getPlayDates();
    }, [auth, setAuth, setReveiverPlayDateMap]);

    return (
        <>
            {loading ? (
                <>Loading...</>
                ) : (
                <div>
                    {Object.entries(reveiverPlayDateMap).map(([key, val]) => (
                        <PDDisplayReceivedForUser
                            key={key} 
                            PDID={val.play_date_id}
                            PDSenderName={val.sender_name}
                            PDReceiverName={val.receiver_name}
                            PDDate={val.play_date}
                            PDTime={val.play_time}
                            PDConfirmed={val.confirmed}
                        />
                    ))}
                </div>  
            )}
        </>
    )

}
export default InviteReceiverForUser;