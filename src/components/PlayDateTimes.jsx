import React from 'react'
import {useState} from 'react';
import {Alert} from 'react-native';

const time = ['08:00 AM','09:00 AM','10:00 AM','2:00 PM','3:00 PM']

function PlayDateTimes(props) {

  function sayHello() {
    alert('Play Date App','Date Set: ' + props.date.toDateString());
  }

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
      <button onClick={(e)=> displayInfo(e)}> {times} </button>
    </div>
        )
     })}

    <div className>
      {info ? `Would You Like To Send This Invite ${event} ${props.date.toDateString()}` : null}
    </div>
    <div>
    {answer ? <button onClick={(c)=> sayHello (window.location.reload(true))}>Yes</button>: null} {answer ? 'or' :null} {answer ? <button onClick={(d)=> window.location.reload(true)}>No</button>: null}
    </div>
 </div>

  )
}

export default PlayDateTimes;