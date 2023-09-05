import React from 'react'
import { ProfileInfoBox } from '../components'
import MyListbox from '../components/MyListbox'

const UserProfile = () => {
  return (
    <div className='flex'>
      <div className='w-full'>
        <ProfileInfoBox className='flex justify-center space-x-4' />
        <div className='flex justify-center translate-x-4 py-10'>
          <MyListbox />
        </div>
      </div>

     
    </div>
  )
}

export default UserProfile
