import React from 'react'
import InviteReceiver from '../components/PlayDateInvites/InviteReceiver';
import { PlayDateContextProvider } from '../contexts/PlayDateContextProvider';

const MyPlayDate = () => {

    
    return (
        <div className='dark:bg-slate-500'>
            <PlayDateContextProvider>
                <InviteReceiver />
            </PlayDateContextProvider>
        </div>
    )
}

export default MyPlayDate;