import React from 'react'
import { Selector } from '../components'

const UserProfile = () => {
  return (
    <div className='grid-cols-1 grid-rows-1'>
      <Selector classname="grid-cols-1 grid-rows-1" />
      <div>
      <Selector classname="grid-cols-1 grid-rows-1" />
      <div>
      <Selector classname="grid-cols-1 grid-rows-1" />
      </div>
      </div>
    </div>
  )
}

export default UserProfile
