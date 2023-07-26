import { useState } from "react";
import Calendar from "react-calendar";
import React from 'react';
import Time from './PlayDateTime.jsx'

const PlayDateCalendar = () => {
  const [date, setDate] = useState(new Date())
  const [showTime, setShowTime] = useState(false)

  return (
    <div className='p-3 items-center bg-emerald-400 dark:bg-slate-700 mx-auto'>
    <h1 className ='header'>Calendar</h1>
    <div className="calendar-container">
        <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
   <Time showTime={showTime} date={date}/> 
    </div>
      <div className="text-center">
        Selected date: {date.toDateString()}
      </div>
    </div>
    
  );
}

export default PlayDateCalendar;