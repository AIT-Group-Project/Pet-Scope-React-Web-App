import { useState } from "react";
import Calendar from "react-calendar";
import React from 'react';
import Time from './PlayDateTime.jsx'
import './Calendar.css';

const PlayDateCalendar = () => {
  const [date, setDate] = useState(new Date())
  const [showTime, setShowTime] = useState(false)
  

  return (
    <div className='box-border p-3 border-4 items-center bg-emerald-400 dark:bg-slate-700 mx-auto app'>
    <h1 className ='header'>Calendar</h1>
    <div className="calendar-container">
        <Calendar 
        onChange={setDate} 
        value={date} 
        minDate={new Date()} 
        onClickDay={() => setShowTime(true)}/>
   <Time showTime={showTime} date={date}/> 
    </div>
    </div>
    
  );
}

export default PlayDateCalendar;

