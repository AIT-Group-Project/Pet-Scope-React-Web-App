import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

export default function Login() {

  const { loginEmail, loginPassword, setLoginEmail, setLoginPassword } = useStateContext();

  const handleInputChange = e => {
    if (e.target.name === 'log-input-email') {
      setLoginEmail(e.target.value);
    } else if (e.target.name === 'log-input-password') {
      setLoginPassword(e.target.value);
    }
  };

  return(
    <form className='font-semibold'>
      <label type='text'>
        <p className='dark:text-white'>Email</p>
        <input type='email' name='log-input-email' className='w-full p-1 my-1' onChange={handleInputChange} required/>
      </label>
      <label type='text'>
        <p className='dark:text-white'>Password</p>
        <input type='password' name='log-input-password' className='w-full p-1 my-1' onChange={handleInputChange} required/>
      </label>
      <div className = 'relative text-xl text-center rounded-full p-3 mt-1 hover:bg-slate-500'>
        <button type="submit" className='w-full dark:text-white'>Submit</button>
      </div>
    </form>
  )
}