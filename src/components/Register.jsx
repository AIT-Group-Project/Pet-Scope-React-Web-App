import React from 'react';
import axios from 'axios';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let salt = 'salt_test';

    axios.post(`http://localhost:8090/api/register`, {
        "first_name": registerFirstName,
        "last_name": registerLastName,
        "email": registerEmail,
        "password_hash": registerPassword,
        "password_salt": salt
    })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (e) {
      console.log(e);
    });
  }
  
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
        <button type="submit" className='w-full dark:text-white' onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  )
}