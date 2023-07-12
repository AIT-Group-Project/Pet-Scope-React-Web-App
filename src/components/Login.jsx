import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

export default function Login() {

  const { loginEmail, loginPassword, setLoginEmail, setLoginPassword } = useStateContext();

  const handleInputChange = e => {
    if (e.target.name === 'input-email') {
      setLoginEmail(e.target.value);
      //console.log('Email: ',loginEmail);
    } else if (e.target.name === 'input-password') {
      setLoginPassword(e.target.value);
      //console.log('Password: ',loginPassword);
    }
  };

  return(
    <form className='font-semibold'>
      <label type='text'>
        <p className='dark:text-white'>Email</p>
        <input type='email' name='input-email' className='w-full p-1 my-1' onChange={handleInputChange} />
      </label>
      <label type='text'>
        <p className='dark:text-white'>Password</p>
        <input type='password' name='input-password' className='w-full p-1 my-1' onChange={handleInputChange} />
      </label>
      <div className = 'relative text-xl text-center rounded-full p-3 mt-1 hover:bg-slate-500'>
        <button type="submit" className='w-full dark:text-white'>Submit</button>
      </div>
    </form>
  )
}