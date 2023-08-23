import React from 'react'
import { useState } from 'react';


const Selector = () => {

  const dropdownstyle = useState('p-2 text-sm hover:bg-sky-600 hover:text-white')
  return (
    <select className='items-center pt-5' class="ui selection dropdown">
  <option className={`${dropdownstyle}`} value="">Pet</option>
  <option className={`${dropdownstyle}`} value="0">Cat</option>
  <option className={`${dropdownstyle}`} value="1">Dog</option>
  <option className={`${dropdownstyle}`} value="2">Bird</option>
  <option className={`${dropdownstyle}`} value="3">Rabbit</option>
  <option className={`${dropdownstyle}`} value="4">Squirrel</option>
  <option className={`${dropdownstyle}`} value="5">Horse</option>
  <option className={`${dropdownstyle}`} value="6">Turtle</option>
  <option className={`${dropdownstyle}`} value="7">Parrot</option>
</select>

  )
}

export default Selector
