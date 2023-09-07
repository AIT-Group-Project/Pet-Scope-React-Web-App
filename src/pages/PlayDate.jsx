import React from 'react';
import { PlayDateContextProvider } from '../contexts/PlayDateContextProvider';
import { PlayDateInviteContextProvider } from '../contexts/PlayDateInviteContextProvider';
import { PDCalendar } from '../components';
import InviteContainer from '../components/PlayDateInvites/InviteContainer';
import InviteReceiver from '../components/PlayDateInvites/InviteReceiver';

const PlayDate = () => {
  return (
    <div className='dark:bg-slate-500'>
      <PlayDateContextProvider>
        <PDCalendar />
      </PlayDateContextProvider>
      <div className='dark:bg-slate-500'>
      <PlayDateInviteContextProvider>
      <InviteReceiver />
      </PlayDateInviteContextProvider>
      </div>
    </div>
  )
};

export default PlayDate;