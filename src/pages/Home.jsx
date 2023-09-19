import React from 'react'
import { Imageslider } from '../components'
import { UserData } from '../components'

const homepage = () => {
  return (
    <div className=' dark:bg-slate-500'>
      <Imageslider />
      <UserData />
      <div className='text-center dark:bg-slate-500 dark:text-white font-semibold'>
        Welcome to the home page
      </div>
    </div>
  )
}

export default homepage