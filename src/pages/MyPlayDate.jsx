import React from 'react'
import InviteReceiver from '../components/PlayDateInvites/InviteReceiver';
import InviteReceiverForUser from '../components/PlayDateInvites/InviteReceiverForUser';
import { PlayDateContextProvider } from '../contexts/PlayDateContextProvider';

const MyPlayDate = () => {

    
    return (
        <div className='dark:bg-slate-500 grid grid-cols-1 sm:grid-cols-6'>
            <PlayDateContextProvider>
                User Playdate Recieved
                <InviteReceiver />
            </PlayDateContextProvider>

            <PlayDateContextProvider>
                User Playdate Sent
                <InviteReceiverForUser/>
            </PlayDateContextProvider>
        </div>
    )
}

export default MyPlayDate;