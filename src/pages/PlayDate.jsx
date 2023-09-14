import React from 'react';
import { PlayDateContextProvider } from '../contexts/PlayDateContextProvider';
import { PDCalendar } from '../components';



const PlayDate = () => {
  return (
    <div className='dark:bg-slate-500'>
      <PlayDateContextProvider>
        <PDCalendar />
      </PlayDateContextProvider>
    </div>
  )
};

export default PlayDate;