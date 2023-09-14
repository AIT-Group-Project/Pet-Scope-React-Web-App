import React from 'react'
import InviteReceiver from '../components/PlayDateInvites/InviteReceiver';
import InviteReceiverForUser from '../components/PlayDateInvites/InviteReceiverForUser';
import { PlayDateContextProvider } from '../contexts/PlayDateContextProvider';

const MyPlayDate = () => {

    
    return (
        <div className='p-10 mx-auto border-t dark:bg-slate-500 dark:text-black font-semibold grid grid-cols-2 gap-10'>
            <div className= 'p-5 m-5 relative border dark:bg-slate-300 dark:text-black font-semibold border-sky-500 before:w-px before:h-16 before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-full after:h-px after:w-16 '>
                <h1 className= 'text-center text-3xl font-bold underline'>User Playdate Received</h1>
                    <PlayDateContextProvider>
                        <InviteReceiver />
                    </PlayDateContextProvider>
            </div>
            <div className= 'p-5 m-5 relative border dark:bg-slate-300 dark:text-black font-semibold border-sky-500 before:w-px before:h-16 before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-full after:h-px after:w-16'>
                <h2 className= 'text-center text-3xl font-bold underline'>User Playdate Sent</h2>
                    <PlayDateContextProvider>
                        <InviteReceiverForUser/>
                    </PlayDateContextProvider>
            </div>
        </div>
    )
}

export default MyPlayDate;