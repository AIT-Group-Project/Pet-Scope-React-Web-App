import PlayDateTimes from './PlayDateTimes.jsx'

import React from 'react'


function PlayDateTime(props) {
 
 return (
 <div>
  {props.showTime ? <PlayDateTimes date={props.date}
  /> : null}
 </div>
 
  )
}

export default PlayDateTime;