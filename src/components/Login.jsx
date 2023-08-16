import React, { useRef } from 'react';
import axios from 'axios';
import { useStateContext } from '../contexts/ContextProvider';

export default function Login() {

  const loginEmailElement = useRef('');
  const loginPasswordElement = useRef('');
  const {modal, setModal} = useStateContext();

  const toggleModal = () => {
    setModal(!modal);
  };
  
  const auth = async () => {
    const data = {
      email: loginEmailElement.current?.value,
      password: loginPasswordElement.current?.value,
    };

    console.log('current auth data: ', data); // debug

    try {
      const response = await axios.post(`http://localhost:3500/auth`, {
        "email": data.email,
        "password": data.password,
      });
      if (!response.ok) {
        if (response.status === 401) {
          // this means that the user is not authorized
          // send refreshToken
          throw new Error(`${response.status} ${response.statusText}`);
        } else if (response.status === 403) {
          // this means that users password is invalid
          throw new Error(`${response.status} ${response.statusText}`);
        }
      }
      return response.data;
    } catch (error) {
      console.log(error.stack);
    }
  };
  
  const handleAuth = () => async (e) => {
    e.preventDefault();

    // res: accessToken  (res.data.accessToken)
    // res: refreshToken (cookie)
    const resData = await auth();
    console.log('resData: ', resData); // debug

    // add concept of a user 
    //  - set var accessToken
    //  - set var user_id
    //  - set var email
    // todo store the users accessToken in memory only (security reasons)

    // closes login modal once user is logged in
    toggleModal();
  }
  
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
          <button type="submit" className='w-full rounded-lg dark:text-white' onClick={handleAuth()}>Submit</button>
        </div>
      </form>
    </div>
  )
}