import React, { useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { useStateContext } from '../contexts/ContextProvider';

export default function Login() {

  const loginEmailElement = useRef('');
  const loginPasswordElement = useRef('');
  const {modal, setModal} = useStateContext();

  useEffect(() => {
    // console.log(`current email: ${loginEmailElement.current?.value}`)
    // console.log(`current password: ${loginPasswordElement.current?.value}`)
  })
  
  const toggleModal = () => {
    setModal(!modal);
  };

  const getUsersSalt = async () => {
    try {
      const response = await axios.post(`http://localhost:8090/api/salt`, {
        "email": loginEmailElement.current?.value,
      });

      console.log(response.data.password_salt);
      return response;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  
  const login = async (data) => {
    try {
      const hashedPassword = await bcrypt.hashSync(data.password, data.salt);
      const response = await axios.post(`http://localhost:8090/api/test`, {
        "email": data.email,
        "password_hash": hashedPassword,
      });
  
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleSubmitNotActiveUser = useCallback(
    () => async (event) => {
      event.preventDefault();

      const usersSalt = await getUsersSalt();

      const data = {
        email: loginEmailElement.current?.value,
        password: loginPasswordElement.current?.value,
        salt: usersSalt.data.password_salt
      };
      console.log(data)

      await login(data);
      toggleModal();
    },
    []
  );
  
  return(
    <div>
      <form className='font-semibold'>
        <label type='text'>
          <p className='dark:text-white'>Email</p>
          <input ref={loginEmailElement} type='email' className='w-full p-1 my-1' autoFocus required/>
        </label>
        <label type='text'>
          <p className='dark:text-white'>Password</p>
          <input ref={loginPasswordElement} type='password' className='w-full p-1 my-1' required/>
        </label>
        <div className = 'relative text-xl text-center rounded-lg p-3 my-2 dark:bg-slate-500 dark:hover:bg-slate-500/[0.5]'>
          <button type="submit" className='w-full rounded-lg dark:text-white' onClick={handleSubmitNotActiveUser()}>Submit</button>
        </div>
      </form>
    </div>
  )
}