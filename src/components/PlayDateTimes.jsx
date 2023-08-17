// import React from 'react'
// import {useState} from 'react';



// function PlayDateTimes(props) {

//   function sayHello() {
//     alert('Date Set: ' + props.date.toDateString());
//   }

//  const time = ['08:00 AM','09:00 AM','10:00 AM','2:00 PM','3:00 PM']
//  const [event, setEvent] = useState(null)
//  const [info, setInfo] = useState(false)
//  const [answer, setAnswer] =useState(false)

//  function displayInfo(e) {
//    setInfo(true);
//    setEvent(e.target.innerText);
//    setAnswer(true);
   
// }

// return (
 
//  <div className='box-border p-3 c mx-auto'>
//     "Please Select A Time"
//    {time.map(times => {
//     return (
//     <div>
//       <button class="font-normal hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 transform motion-safe:hover:scale-110 sm:hover:bg-slate-400 sm:hover:font-bold font-bold box-border h-16 w-16 p-1 border-4 bg-emerald-400 dark:bg-slate-700 mx-auto"
//       onClick={(e)=> displayInfo(e)}> {times} </button>
//     </div>
//         )
//      })}
//     <div className>
//       {info ? '---------' : null}
//     </div>
//     <div className>
//       {info ? `Would You Like To Send This Invite ${event} ${props.date.toDateString()}` : null}
//     </div>
//     <div>
//        ---------
//     </div>
//     <div>
//     {answer ?  <button class="font-normal transform motion-safe:hover:scale-110 sm:hover:bg-green-500 sm:hover:font-bold font-bold box-border p-1 border-4 items-center bg-emerald-400 dark:bg-slate-700 mx-auto" onClick={(c)=> sayHello (window.location.reload(true))}>Yes</button>: null}
//     {answer ? ' or ' :null} 
//     {answer ? <button class="font-normal transform motion-safe:hover:scale-110 sm:hover:bg-red-500 sm:hover:font-bold box-border p-1 border-4 items-center bg-emerald-400 dark:bg-slate-700 mx-auto" onClick={(d)=> window.location.reload(true)}>No</button>: null}
//     </div>
//  </div>

//   )
// }

// export default PlayDateTimes;


import React, { useCallback, useState } from 'react';
import axios from 'axios';

function PlayDateTimes(props) {

  const [selectedCalendarTime, setSelectedCalendarTime] = useState(null);

  const timeOptions = ['08:00 AM','09:00 AM','10:00 AM','2:00 PM','3:00 PM']
  const [info, setInfo] = useState(false)

  function displayInfo(e) {
    setInfo(true);
  }

  const handleSelectedTime = useCallback((value) => {
    setSelectedCalendarTime(value);
    displayInfo();
  },[console.log(selectedCalendarTime)])

  const handleSubmitYes = async () => {
    // axios request to db 
    // req: data: selectedCalendarTime, selectedCalendarDate, sender(user_id), receiver(user_id)
    // res: created play_date || play_date not available
    //
    // json request must look like this
    //   {
    //     "sender_user_id": 20,
    //     "receiver_user_id": 21,
    //     "play_date": "2023-08-14",
    //     "play_time": "08:30:00"
    //    }

    const response = await axios.post(`http://localhost:3500/api/playdate`, {
      'sender_user_id': null,
      'receiver_user_id': null,
      'play_date': props.data.toDateString(),
      'play_time': selectedCalendarTime
    })

    console.log('response: ', response)
  }

  const handleSubmitNo = () => {
    console.log('handleNo')
  }

  return (
    <div>
      <div>Please Select a Time</div>
      <div>
        {timeOptions.map(time => {
          return (
            <div>
              <button 
                className='dark:bg-slate-500 w-1/2 p-1 m-1 dark:focus:border-white focus:border-2'
                onClick={(e) => handleSelectedTime(e.target.innerText)}
              >{time}</button>
            </div>  
          )
        })}
      </div>

      <div className='flex'>
        <div> 
        {info ? `Would You Like To Send This Invite ${selectedCalendarTime} ${props.date.toDateString()}` : null}
        </div>
        
        {info ? <button className='p-1 m-1 dark:bg-slate-500 transform motion-safe:hover:scale-110 sm:hover:bg-green-500 w-1/2' 
        onClick={handleSubmitYes}>Yes</button>
        : null}

        {info ? <button className='p-1 m-1 dark:bg-slate-500 transform motion-safe:hover:scale-110 sm:hover:bg-red-500 w-1/2' 
        onClick={handleSubmitNo}>No</button>
        : null}

      </div>
    </div>
  )

}

export default PlayDateTimes