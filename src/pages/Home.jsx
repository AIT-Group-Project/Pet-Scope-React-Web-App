import React from 'react'
import { Imageslider } from '../components'
import { UserData } from '../components'

const homepage = () => {
  return (
    <div className=' dark:bg-slate-500'>
      <div className='p-4 text-center text-5xl dark:bg-slate-500 dark:text-white font-bold'>
        <p className='text-4xl p-4'>Welcome To</p>
        <h1 className='text-6xl mb-4'>PetScope Veterinarian Clinic</h1>
      </div>
      <UserData />
      <Imageslider />
      
    </div>
  )
}

export default homepage