import React, { useContext } from 'react'
import AuthContext from '../contexts/AuthProvider';
import { useStateContext } from '../contexts/ContextProvider';
import axios from "../api/axios";
import UserContext from '../contexts/UserProvider';
import { useNavigate } from 'react-router-dom';
const LOGOUT_URL = '/logout'

const Logout = () => {
  const { setAuth } = useContext(AuthContext);
  const { setActiveUser } = useStateContext();
  const { setUser } = useContext(UserContext);
  const { setUserData } =useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try{
      const response = await axios.get(LOGOUT_URL,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      console.log('response', response); // debug
      setUser(false);
      setAuth({});
      setActiveUser(false);
      setUserData([null]);
      navigate('/home');

    } catch (error) {
    console.log(error.stack);
    }
  };


  return (
    <div>
      <button onClick={handleLogout} className='block text-xl rounded-lg m-2 px-3 py-2 hover:bg-yellow-400 text-blue-700 dark:bg-slate-500 dark:text-white'>
        Logout
      </button>
    </div>
  )
};

export default Logout