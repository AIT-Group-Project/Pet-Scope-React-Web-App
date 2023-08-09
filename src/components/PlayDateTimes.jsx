import React from 'react'
import {useState} from 'react';



function PlayDateTimes(props) {

  function sayHello() {
    alert('Date Set: ' + props.date.toDateString());
  }

 const time = ['08:00 AM','09:00 AM','10:00 AM','2:00 PM','3:00 PM']
 const [event, setEvent] = useState(null)
 const [info, setInfo] = useState(false)
 const [answer, setAnswer] =useState(false)

 function displayInfo(e) {
   setInfo(true);
   setEvent(e.target.innerText);
   setAnswer(true);
   
}

return (
 
 <div className='box-border p-3 c mx-auto'>
    "Please Select A Time"
   {time.map(times => {
    return (
    <div>
      <button class="font-normal hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 transform motion-safe:hover:scale-110 sm:hover:bg-slate-400 sm:hover:font-bold font-bold box-border h-16 w-16 p-1 border-4 bg-emerald-400 dark:bg-slate-700 mx-auto"
      onClick={(e)=> displayInfo(e)}> {times} </button>
    </div>
        )
     })}
    <div className>
      {info ? '---------' : null}
    </div>
    <div className>
      {info ? `Would You Like To Send This Invite ${event} ${props.date.toDateString()}` : null}
    </div>
    <div>
       ---------
    </div>
    <div>
    {answer ?  <button class="font-normal transform motion-safe:hover:scale-110 sm:hover:bg-green-500 sm:hover:font-bold font-bold box-border p-1 border-4 items-center bg-emerald-400 dark:bg-slate-700 mx-auto" onClick={(c)=> sayHello (window.location.reload(true))}>Yes</button>: null}
    {answer ? ' or ' :null} 
    {answer ? <button class="font-normal transform motion-safe:hover:scale-110 sm:hover:bg-red-500 sm:hover:font-bold box-border p-1 border-4 items-center bg-emerald-400 dark:bg-slate-700 mx-auto" onClick={(d)=> window.location.reload(true)}>No</button>: null}
    </div>
 </div>

  )
}

export default PlayDateTimes;