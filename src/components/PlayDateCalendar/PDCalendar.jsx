import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const PDCalendar = () => {
  return (
    <div className='w-full flex'>
      <div className='mx-auto m-2'>
        <Calendar />
      </div>
    </div>
  )
}

export default PDCalendar