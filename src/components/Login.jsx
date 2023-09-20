import React, { useContext, useRef } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import AuthContext from '../contexts/AuthProvider';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
const LOGIN_URL = '/auth';



export default function Login() {

  const loginEmailElement = useRef('');
  const loginPasswordElement = useRef('');
  const {modal, setModal} = useStateContext();
  const { setAuth } = useContext(AuthContext);
  const { setActiveUser } = useStateContext();
  const navigate = useNavigate();

  const toggleModal = () => {
    setModal(!modal);
  };
  
  const authentication = async () => {
    const email = loginEmailElement.current?.value;
    const password = loginPasswordElement.current?.value;
    console.log('current auth data: ', email ,password); // debug

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({email, password}),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      if (!response.ok) {
        if (response.status === 401) {
          // this means that the user is not authorized
          // send refreshToken cookie to get a new auth token
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

  const handleAuthentication = () => async (e) => {
    e.preventDefault();

    // res: accessToken  (res.data.accessToken)
    // res: refreshToken (cookie)
    const resData = await authentication();

    if (resData !== undefined) {
      console.log('resData: ', resData); // debug
      const accessToken = resData.accessToken;
      const email = resData.resultEmail;
      const userId = resData.resultUserId;
      setAuth({accessToken, email, userId});
      setActiveUser(true);
      navigate('/home');
    }
    // closes login modal once user is logged in
    toggleModal();
                          
  }

  // reminder to change the login button to a sign out button when a user has logged in
  return(
    <div>
      <form className='font-semibold'>
        <label type='text'>
          <p className='text-black dark:text-white'>Email</p>
          <input ref={loginEmailElement} type='email' className='w-full p-1 my-1 text-black' autoFocus required/>
        </label>
        <label type='text'>
          <p className='text-black dark:text-white'>Password</p>
          <input ref={loginPasswordElement} type='password' className='w-full p-1 my-1 text-black' required/>
        </label>
        <div className = 'relative text-xl text-center rounded-lg p-3 my-2 dark:bg-slate-500 dark:hover:bg-slate-500/[0.5]'>
          <button type="submit" className='w-full rounded-lg text-black dark:text-white' onClick={handleAuthentication()}>Submit</button>
        </div>
      </form>
    </div>
  )
}