import React, { useRef, useReducer } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import axios from '../../api/axios';
import  AuthProvider  from '../../contexts/AuthProvider';
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
        address: '',
        phoneNo: '',
        postcode: '',
      };
    default:
      return state;
  }
};

function Form() {
	const {auth} = useContext(AuthProvider);
  	const formRef = useRef(null);

  // Initialize form state using useReducer
  const [formData, dispatch] = useReducer(formReducer, {
    petname: '',
    dogorcat: '',
    gender: '',
    breed: '',
    age: '',
    address: '',
    phoneNo: '',
    postcode: '',
    image: null,
  });
  const [imageError, setImageError] = useState('');
  
	const handleChange = (event) => {
	  const { name, value } = event.target;
	  dispatch({ type: 'UPDATE_FIELD', field: name, value });
	  console.log('formData', formData);
	};

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size <= 10 * 1024 * 1024) {
        dispatch({type: 'UPDATE_IMAGE', value: file });
        console.log(formData.image)
        setImageError('');
      } else {
        setImageError('Image size exceeds 10mb limit');
      }
    }
  };
  
	const handleSubmit = async (event, UID) => {
	  event.preventDefault();
		console.log('formData', formData);
	  try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      console.log([...formDataToSend.entries()]);
		  const response = await axios.post(PROFILE_URL,
		  	formDataToSend, UID, 
        {
          headers: {'Authorization': `Bearer ${auth.accessToken}`, 'Content-Type': 'multipart/form-data'},
          withCredentials: true
        });
		  console.log('API response:', response.data);
		  dispatch({ type: 'RESET_FORM' }); // Reset the form after submission
		  formRef.current.reset();
	    } catch (error) {
		  console.error('Error:', error);
	    }
	};
  
	return (
	  <form onSubmit={(e) => handleSubmit(e, auth.userId)} ref={formRef} className="flex flex-1 justify-center space-x-4 hidden md:flex">
		<div className='mt-10'>	
		<label htmlFor='petname' className='block text-m font-medium leading-6 text-gray-900'>Pet name</label>
		<input
		  name='petname'
		  placeholder='Pet Name'
		  value={formData.petname}
		  onChange={handleChange}
		/>
		<div className='mt-3'>
          <label htmlFor='dogorcat' className='block text-m font-medium leading-6 text-gray-900'>Dog or cat</label>
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
          <label htmlFor='gender' className='block text-m font-medium leading-6 text-gray-900'>Gender</label>
          <input
            name='gender'
            placeholder='Gender'
			      value={formData.gender}
			      onChange={handleChange}
          />
        </div>
        <div className='mt-3'>
          <label htmlFor='breed' className='block text-m font-medium leading-6 text-gray-900'>Pet Breed</label>
          <input
            name='breed'
            placeholder='Breed'
			      value={formData.breed}
			      onChange={handleChange}
          />
        </div>
        <div className='mt-3'>
          <label htmlFor='age' className='block text-m font-medium leading-6 text-gray-900'>Age</label>
          <input
            name='age'
            placeholder='Age'
			      value={formData.age}
			      onChange={handleChange}
          />
        </div>
        <div className='mt-3'>
          <label htmlFor='address' className='block text-m font-medium leading-6 text-gray-900'>Address</label>
          <input
            name='address'
            placeholder='Address'
			      value={formData.address}
			      onChange={handleChange}
          />
        </div>
        <div className='mt-3'>
          <label htmlFor='phoneNo' className='block text-m font-medium leading-6 text-gray-900'>Phone Number</label>
          <input
            name='phoneNo'
            placeholder='Phone Number'
			      value={formData.phoneNo}
			      onChange={handleChange}
          />
        </div>
        <div className='mt-3'>
          <label htmlFor='postcode' className='block text-m font-medium leading-6 text-gray-900'>Postcode</label>
          <input
            name='postcode'
            placeholder='postcode'
			      value={formData.postcode}
			      onChange={handleChange}
          />
        </div>
        <div className='mt-3'>
          <label htmlFor='image' className='block text-m font-medium leading-6 text-gray-900'>
            Upload Image (Max 10MB)
          </label>
          <input
            type='file'
            name='image'
            accept='image/*'
            onChange={handleImageChange}
          />
          {imageError && <p className='text-red-500'>{imageError}</p>}
        </div>
		<div className='mt-3'>
		  <button type='submit' className='justify-center items-center mt-3 py-4'>Update Profile</button>
		</div>
		</div>
	  </form>
	);
  }
  
        

export default Form
