import React from 'react'
import {useState} from 'react';

const time = ['08:00','09:00','10:00','14:00','15:00']

function PlayDateTimes(props) {

 const [event, setEvent] = useState(null)
 const [info, setInfo] = useState(false)

 function displayInfo(e) {
   setInfo(true);
   setEvent(e.target.innerText);
}

return (
 
 <div className="times">
    "Please Select A Time"
   {time.map(times => {
    return (
    <div>
      <button onClick={(e)=> displayInfo(e)}> {times} </button>
    </div>
        )
     })}
    <div>
      {info ? `Would You Like To Send This Invite ${event} ${props.date.toDateString()}` : null}
    </div>
    <div>
      {info ? `Yes or No?` : null}
    </div>
 </div>
  )
}

export default PlayDateTimes;