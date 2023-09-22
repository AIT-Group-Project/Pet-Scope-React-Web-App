import React, { useRef, useReducer, createRef } from 'react';
import { useContext } from 'react';
import axios from '../../api/axios';
import AuthContext from '../../contexts/AuthProvider';
import UserContext from '../../contexts/UserProvider';
import { useNavigate } from 'react-router-dom';
const PROFILE_URL = './profile';


// Define the reducer function

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'UPDATE_IMAGE':
      return {...state, image: action.value };
    case 'RESET_FORM':
      return {
        petname: '',
        dogorcat: '',
        gender: '',
        breed: '',
        age: '',
        suburb: '',
        phoneNo: '',
        postcode: '',
      };
    default:
      return state;
  }
};

function Form() {
	const {auth} = useContext(AuthContext);
  const { setUser } = useContext(UserContext);
  const { setUserData } =useContext(UserContext);
  const navigate = useNavigate();
  	const formRef = useRef(null);
    const fileInput = createRef();
    const FormSytles = 'block text-m font-medium leading-6 text-gray-900 dark:text-white underline py-2';

  // Initialize form state using useReducer
  const [formData, dispatch] = useReducer(formReducer, {
    petname: '',
    dogorcat: '',
    gender: '',
    breed: '',
    age: '',
    suburb: '',
    phoneNo: '',
    postcode: '',
  });

  
	const handleChange = (event) => {
	  const { name, value } = event.target;
	  dispatch({ type: 'UPDATE_FIELD', field: name, value });
	  console.log('formData', formData);
	};
  
	const handleSubmit = async (event, UID) => {
	  event.preventDefault();

		console.log('formData', formData);
	  try {
      const file = fileInput.current.files[0];
      const sendfile = new FormData();
      sendfile.append('myFile', file);
      const requestData = {...formData, UID}
      Object.entries(requestData).forEach(([key, value]) => {
        sendfile.append(key, value);
      });
      console.log('formData', formData);
		  const response = await axios.post(PROFILE_URL,
        sendfile,
        { 
          headers: {'Authorization': `Bearer ${auth.accessToken}`},
          withCredentials: true
        });
		  console.log('API response:', response.data);
		  dispatch({ type: 'RESET_FORM' }); // Reset the form after submission
		  formRef.current.reset();
	    } catch (error) {
		  console.error('Error:', error);
	    }
      setUser(false);
      setUserData([null]);
      navigate('/home');
      
	};
  
	return (
    
	  <form onSubmit={(e) => handleSubmit(e, auth.userId)} ref={formRef} className="flex flex-1 justify-center space-x-4 hidden md:flex">
    <div className=' items-center justify-center absolute text-center text-lg text-semibold text-black dark:text-white mb-10 mt-3 space-x-4 space-y-4'>Profile Settings</div>
		<div className='mt-9'>	
		<label htmlFor='petname' className={`${FormSytles}`}>Pet name</label>
		<input
		  name='petname'
		  placeholder='Pet Name'
		  value={formData.petname}
		  onChange={handleChange}
      className='border border-gray-800'
		/>
		<div className='mt-3'>
          <label htmlFor='dogorcat' className={`${FormSytles}`}>Dog or cat</label>
          <div>
            <label className='inline-flex items-center'>
              <input
                type='radio'
                name='dogorcat'
                value='dog'
                checked={formData.dogorcat === 'dog'}
                onChange={handleChange}
              />
              <span className='ml-2'>Dog</span>
            </label>
            <label className='inline-flex items-center ml-4'>
              <input
                type='radio'
                name='dogorcat'
                value='cat'
                checked={formData.dogorcat === 'cat'}
                onChange={handleChange}
              />
              <span className='ml-2'>Cat</span>
            </label>
          </div>

        </div>
        <div className='mt-3'>
          <label htmlFor='gender' className={`${FormSytles}`}>Gender</label>
          <input
            name='gender'
            placeholder='Gender'
			      value={formData.gender}
			      onChange={handleChange}
            className='border border-gray-800'
          />
        </div>
        <div className='mt-3'>
          <label htmlFor='breed' className={`${FormSytles}`}>Pet Breed</label>
          <input
            name='breed'
            placeholder='Breed'
			      value={formData.breed}
			      onChange={handleChange}
            className='border border-gray-800'
          />
        </div>
        <div className='mt-3'>
          <label htmlFor='age' className={`${FormSytles}`}>Age</label>
          <input
            name='age'
            placeholder='Age'
			      value={formData.age}
			      onChange={handleChange}
            className='border border-gray-800'
          />
        </div>
        <div className='mt-3'>
          <label htmlFor='Suburb' className={`${FormSytles}`}>Suburb</label>
          <input
            name='suburb'
            placeholder='Suburb'
			      value={formData.suburb}
			      onChange={handleChange}
            className='border border-gray-800'
          />
        </div>
        <div className='mt-3'>
          <label htmlFor='phoneNo' className={`${FormSytles}`}>Phone Number</label>
          <input
            name='phoneNo'
            placeholder='Phone Number'
			      value={formData.phoneNo}
			      onChange={handleChange}
            className='border border-gray-800'
          />
        </div>
        <div className='mt-3'>
          <label htmlFor='postcode' className={`${FormSytles}`}>Postcode</label>
          <input
            name='postcode'
            placeholder='postcode'
			      value={formData.postcode}
			      onChange={handleChange}
            className='border border-gray-800'
          />
        </div>
        <div className='mt-3'>
        <input type="file" name='avatar' ref={fileInput}/>
        </div>
		<div className='mt-3'>
		  <button type='submit' className='justify-center items-center mt-3 py-4 box-content dark:text-white'>Update Profile</button>
		</div>
		</div>
	  </form>
	);
  }
  
        

export default Form
