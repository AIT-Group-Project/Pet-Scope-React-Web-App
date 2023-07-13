import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

export default function Register() {

  const { registerFirstName, setRegisterFirstName, registerLastName, setRegisterLastName, registerEmail, setRegisterEmail, registerPassword, setRegisterPassword } = useStateContext();

  const handleInputChange = e => {
    if (e.target.name === 'reg-input-first-name') {
      setRegisterFirstName(e.target.value);
    } else if (e.target.name === 'reg-input-last-name') {
      setRegisterLastName(e.target.value);
    } else if (e.target.name === 'reg-input-email') {
      setRegisterEmail(e.target.value);
    } else if (e.target.name === 'reg-input-password') {
      setRegisterPassword(e.target.value);
    }
  };
  
  return(
    <form className='font-semibold'>
      <label type='text'>
        <p className='dark:text-white'>First Name</p>
        <input type='text' name='reg-input-first-name' className='w-full p-1 my-1' onChange={handleInputChange} required/>
      </label>
      <label type='text'>
        <p className='dark:text-white'>Last Name</p>
        <input type='text' name='reg-input-last-name' className='w-full p-1 my-1' onChange={handleInputChange} required/>
      </label>
      <label type='text'>
        <p className='dark:text-white'>Email</p>
        <input type='email' name='reg-input-email' className='w-full p-1 my-1' onChange={handleInputChange} required/>
      </label>
      <label type='text'>
        <p className='dark:text-white'>Password</p>
        <input type='password' name='reg-input-password' className='w-full p-1 my-1' onChange={handleInputChange} required/>
      </label>
      <div className = 'relative text-xl text-center rounded-full p-3 mt-1 hover:bg-slate-500'>
        <button type="submit" className='w-full dark:text-white'>Submit</button>
      </div>
    </form>
  )
}