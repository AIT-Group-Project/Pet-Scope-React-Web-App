import React, { useEffect } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { useStateContext } from '../contexts/ContextProvider';

export default function Login() {

  const { loginEmail, loginPassword, setLoginEmail, setLoginPassword, modal, setModal, result, setResult, resultUserInfo, setResultUserInfo } = useStateContext();

  useEffect(() => {
    console.log(`Updated result state: ${result}`)
    console.log(`Updated resultUserInfo state: ${resultUserInfo}`)
  })

  const toggleModal = () => {
    setModal(!modal);
};

  const handleInputChange = e => {
    if (e.target.name === 'log-input-email') {
      setLoginEmail(e.target.value);
    } else if (e.target.name === 'log-input-password') {
      setLoginPassword(e.target.value);
    }
  };

  const checkDatabaseForUser = () => {
  axios.post(`http://localhost:8090/api/login`, {
    "email": loginEmail,
  })
  .then(function (res) {
    setResult(res.data.user)
    console.log(res);
  })
  .catch(function (e) {
    console.log(e);
  });
  }

  const getUserPassword = () => {
    axios.post(`http://localhost:8090/api/test`, {
      "email": loginEmail,
    })
    .then(function (res) {
      setResultUserInfo(res)
      console.log(res);
    })
    .catch(function (e) {
      console.log(e);
    });
    }

  const handleSubmit = (e) => {
    e.preventDefault();

    checkDatabaseForUser();
    getUserPassword();

    // if (result) {
    //   getUserPassword();
    // }

    toggleModal();





  


    // let passwordSalt = bcrypt.genSaltSync(10);
    // let passwordHash = bcrypt.hashSync(loginPassword, passwordSalt);

    // axios.post(`http://localhost:8090/api/test`, {
    //     "email": loginEmail,
    //     "password_hash": passwordHash,
    //     "password_salt": passwordSalt
    // })
    // .then(function (res) {
    //   console.log(res);
    //   toggleModal();
    // })
    // .catch(function (e) {
    //   console.log(e);
    // });
    
  }

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
      <div className = 'relative text-xl text-center rounded-lg p-3 my-2 dark:bg-slate-500 dark:hover:bg-slate-500/[0.5]'>
        <button type="submit" className='w-full rounded-lg dark:text-white' onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  )
}