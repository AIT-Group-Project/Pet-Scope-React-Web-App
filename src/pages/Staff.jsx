import React from 'react'
import CardContainer from '../components/StaffCards/CardContainer'

const Staff = () => {
  return (
    <div className='dark:bg-slate-600'>
      <section className='p-20 grid md:grid-cols-2 sm:grid-cols-1 gap-6'>
        <CardContainer />
      </section>
    </div>
  )
}

export default Staff