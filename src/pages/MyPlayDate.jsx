import React from 'react'
import InviteReceiver from '../components/PlayDateInvites/InviteReceiver';
import InviteReceiverForUser from '../components/PlayDateInvites/InviteReceiverForUser';
import { PlayDateContextProvider } from '../contexts/PlayDateContextProvider';

const MyPlayDate = () => {
    const style = 'p-5 m-5 relative border dark:bg-slate-300 dark:text-black font-semibold border-sky-500 before:w-px before:h-16 before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-full after:h-px after:w-16 '
    const headerStyle = 'text-center text-3xl font-bold underline'
    
    return (
        <div className='p-10 mx-auto border-t dark:bg-slate-500 dark:text-black font-semibold grid grid-cols-2 gap-10'>
            <div className= {`${style}`}>
                <h1 className= {`${headerStyle}`}>User Playdate Received</h1>
                    <PlayDateContextProvider>
                        <InviteReceiver />
                    </PlayDateContextProvider>
            </div>
            <div className= {`${style}`}>
                <h2 className= {`${headerStyle}`}>User Playdate Sent</h2>
                    <PlayDateContextProvider>
                        <InviteReceiverForUser/>
                    </PlayDateContextProvider>
            </div>
        </div>
    )
}

export default MyPlayDate;