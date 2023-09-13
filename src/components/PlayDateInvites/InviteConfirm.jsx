import React, { useContext } from 'react';
import axios from '../../api/axios';
import AuthContext from '../../contexts/AuthProvider';
const styles = 'text-center w-full py-2 m-1 rounded-lg dark:bg-slate-300';
const PLAYDATES_URL = '/playdate';

export const InviteConfirm = ({id,confirm,innertext}) => {
    const { auth } = useContext(AuthContext);

    const handleInvite = async () => {
        const data = {
            PlayDate_ID: id,
            Confirmed: confirm
        }
        console.log('PlayDate ID and Status are:', data)

        if (!auth.accessToken) {
            console.error("Access token is not avaliable")
            return;
        }
        try {
            const response = await axios.post(`${PLAYDATES_URL}/${data.PlayDate_ID}`,
                JSON.stringify({...data}),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${auth.accessToken}`}, 
                    withCredentials: true
                }
            );
            console.log('responseSubmit', response)
        } catch (error) {
            console.error('failed to confirm or decline playdate', error);
        }
    }
    
  return (
    <div>
        <button className={`${styles}`} onClick={(handleInvite)}>{innertext}</button>
    </div>
  )
}
