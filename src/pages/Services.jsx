import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthProvider';
import { PlayDateContextProvider } from '../contexts/PlayDateContextProvider';
import { PDCalendar, PDTimeSelect, PDSubmit, PDReceiverDropdown } from '../components';

const Services = () => {
  const { auth } = useContext(AuthContext);
  return (
    <div className='dark:bg-slate-500'>
      <PlayDateContextProvider>
        <PDCalendar />
        <PDTimeSelect />
        <PDReceiverDropdown /> 
        <PDSubmit />
      </PlayDateContextProvider>
    </div>
  )
};

export default Services;