import React from 'react'
import CardContainer from '../components/StaffCards/CardContainer'

const Staff = () => {
  return (
    <div className='flex dark:bg-slate-500'>
      <div className='w-full'>
      <p className='font-bold text-3xl text-black dark:text-white text-center'>Meet the Team</p>
        <CardContainer />
      </div>
    </div>
  )
}

export default Staff