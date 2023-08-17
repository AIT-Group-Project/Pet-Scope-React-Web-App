import React, { useRef } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import axios from '../api/axios';
const REGISTER_URL = '/register';

const Register = () => {

  const registerFirstNameElement = useRef('');
  const registerLastNameElement = useRef('');
  const registerEmailElement = useRef('');
  const registerPasswordElement = useRef('');

  const {modal, setModal} = useStateContext();

  const toggleModal = () => {
    setModal(!modal);
  };

  const register = async () => {
    const firstName = registerFirstNameElement.current?.value;
    const lastName = registerLastNameElement.current?.value;
    const email = registerEmailElement.current?.value;
    const password = registerPasswordElement.current?.value;

    console.log(`reg data: ${firstName}:${lastName}:${email}:${password}`)

    try {
      const response = await axios.post(REGISTER_URL,
        JSON.stringify({firstName, lastName, email, password}),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );
      return response;
    } catch (error) {
      console.log(error.stack);
    }
  };

  const handleRegister = () => async (e) => {
    e.preventDefault();

    const res = await register();
    console.log('res', res);

    toggleModal();
  }

  return (
    <form>

      <label type='text'>
        <p className='dark:text-white'>First Name</p>
        <input ref={registerFirstNameElement} type='text' className='w-full p-1 my-1' required/>
      </label>

      <label type='text'>
        <p className='dark:text-white'>Last Name</p>
        <input ref={registerLastNameElement} type='text' className='w-full p-1 my-1' required/>
      </label>

      <label type='text'>
        <p className='dark:text-white'>Email</p>
        <input ref={registerEmailElement} type='email' className='w-full p-1 my-1' required/>
      </label>

      <label type='text'>
        <p className='dark:text-white'>Password</p>
        <input ref={registerPasswordElement} type='password' className='w-full p-1 my-1' required/>
      </label>

      <div className = 'relative text-xl text-center rounded-lg p-3 my-2 dark:bg-slate-500 dark:hover:bg-slate-500/[0.5]'>
        <button type="submit" className='w-full rounded-lg dark:text-white' onClick={handleRegister()}>Submit</button>
      </div>

    </form>
  )
}

export default Register