import React from 'react';
import { PlayDateContextProvider } from '../contexts/PlayDateContextProvider';
import { PDCalendar, PDTimeSelect } from '../components';

const Services = () => {
  return (
    <div>
      <PlayDateContextProvider>
        <PDCalendar />
        <PDTimeSelect />
      </PlayDateContextProvider>
    </div>
  )
}

export default Services;