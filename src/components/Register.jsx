import React from 'react';
import axios from 'axios';
import { useStateContext } from '../contexts/ContextProvider';

export default function Register() {

  // this file need to be refactored
  // change to useRef
  // don't need to send req with hash just send raw

  const { registerFirstName, setRegisterFirstName, registerLastName, setRegisterLastName, registerEmail, setRegisterEmail, registerPassword, setRegisterPassword, modal, setModal } = useStateContext();

  const toggleModal = () => {
    setModal(!modal);
};

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
    let passwordSalt = null;
    let passwordHash = null;

    axios.post(`http://localhost:8090/api/register`, {
        "first_name": registerFirstName,
        "last_name": registerLastName,
        "email": registerEmail,
        "password_hash": passwordHash,
        "password_salt": passwordSalt
    })
    .then(function (res) {
      console.log(res);
      toggleModal();
    })
    .catch(function (e) {
      console.log(e);
    });
    
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
      <div className = 'relative text-xl text-center rounded-lg p-3 my-2 dark:bg-slate-500 dark:hover:bg-slate-500/[0.5]'>
        <button type="submit" className='w-full rounded-lg dark:text-white' onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  )
}