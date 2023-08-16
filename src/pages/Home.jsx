import React from 'react'
import { Imageslider } from '../components'

const homepage = () => {
  return (
    <div className=' dark:bg-slate-500'>
      <Imageslider />
      <div className='text-center dark:bg-slate-500 dark:text-white'>
        Welcome to the home page
      </div>
    </div>
  )
}

export default homepage