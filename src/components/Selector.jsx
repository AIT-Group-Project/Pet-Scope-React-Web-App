import React from 'react'
import { useState } from 'react';


const Selector = () => {

  const dropdownstyle = useState('p-2 w-10 text-sm hover:bg-sky-600 hover:text-white')
  return (
    <select className='text-center pt-5 center w-32 h-32 ' class="ui selection dropdown">
  <option className={`${dropdownstyle}`} value="">Select a Pet</option>
  <option className={`${dropdownstyle}`} value="0">Cat</option>
  <option className={`${dropdownstyle}`} value="1">Dog</option>
</select>

  )
}

export default Selector
