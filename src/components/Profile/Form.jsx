// import React,{ Component, useRef } from 'react'

// class Form extends Component{
// constructor(props){
// 	super(props)
// 	this.state = { petname:'', dogorcat:'', gender:'', breed:'', age:null, address:'',phoneNo:'', postcode:''}
// 	this.handleChange = this.handleChange.bind(this)
// 	this.handleSubmit = this.handleSubmit.bind(this)
// }

// // Form submitting logic, prevent default page refresh
// handleSubmit(event){
// 	const { petname, dogorcat, gender, breed, age, address, phoneNo, postcode } = this.state
// 	event.preventDefault()
// 	alert(`
// 	____Your Details____\n
// 	PetName : ${petname}
// 	Dog or Cat : ${dogorcat}
// 	Gender : ${gender}
// 	Breed : ${breed}
// 	Age : ${age}
// 	Address : ${address}
// 	Phone No : ${phoneNo}
// 	Postcode: ${postcode}
// 	`)
// }

// // Method causes to store all the values of the
// // input field in react state single method handle
// // input changes of all the input field using ES6
// // javascript feature computed property names
// handleChange(event){
// 	this.setState({
// 	// Computed property names
// 	// keys of the objects are computed dynamically
// 	[event.target.name] : event.target.value
// 	})
// }

// // Return a controlled form i.e. values of the
// // input field not stored in DOM values are exist
// // in react component itself as state
// render(){
// 	return(
// 	<form onSubmit={this.handleSubmit} className='flex flex-1 justify-center space-x-4 hidden md:flex'>

import React, { useRef, useState } from 'react';
import axios from '../../api/axios';

function Form() {
  const [formData, setFormData] = useState({
    petname: '',
    dogorcat: '',
    gender: '',
    breed: '',
    age: null,
    address: '',
    phoneNo: '',
    postcode: '',
  });

  const formRef = useRef(null); // Create a ref for the form

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send the form data to your API using Axios
      const response = await axios.post('API_URL', formData);

      // Handle the API response as needed
      console.log('API response:', response.data);

      // Optionally, reset the form
      formRef.current.reset();
    } catch (error) {
      // Handle any errors here
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="flex flex-1 justify-center space-x-4 hidden md:flex">
		<div className='space-y-12'>
			<div className='border-b broder-gray-900/10 pb-12'>
				<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
				<label htmlFor='petname' className='block text-m font-medium leading-6 text-gray-900 cursor-pointer'>Pet Name</label>
				<input
					name='petname'
					placeholder='Pet Name'
					value = {formData.petname}
					onChange={handleChange}
				/>
				</div>
				<div className='mt-3'>
					<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
					<label htmlFor='dogorcat' className='block text-m font-medium leading-6 text-gray-900'>Dog or cat</label>
					<input
						name='dogorcat'
						placeholder='Dog or Cat'
						value={formData.dogorcat}
						onChange={handleChange}
					/>
					</div>
				</div>
				<div className='mt-3'>
					<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
					<label htmlFor='gender' className='block text-m font-medium leading-6 text-gray-900'>Gender</label>
					<input
						name='gender'
						placeholder='Pet Gender'
						value={formData.gender}
						onChange={handleChange}
					/>
					</div>
				</div>
				<div className='mt-3'>
					<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
					<label htmlFor='breed' className='block text-m font-medium leading-6 text-gray-900'>Pet Breed</label>
					<input
						name='breed'
						placeholder='Pet Breed'
						value={formData.breed}
						onChange={handleChange}
					/>
					</div>
				</div>
			</div>
			<div className='mt-3'>
				<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
				<label htmlFor='age' className='block text-m font-medium leading-6 text-gray-900'>Age</label>
				<input
					name='age'
					placeholder='Age'
					value={formData.age}
					onChange={handleChange}
				/>
				</div>
			</div>
			<div className='mt-3'>
				<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
				<label htmlFor='address' className='block text-m font-medium leading-6 text-gray-900'>Address</label>
				<input
					name='address'
					placeholder='Address'
					value={formData.address}
					onChange={handleChange}
				/>
				</div>
			</div>
			<div className='mt-3'>
				<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
				<label htmlFor='phoneNo' className='block text-m font-medium leading-6 text-gray-900'>Phone Number</label>
				<input
					name='phoneNo'
					placeholder='Phone No'
					value={formData.phoneNo}
					onChange={handleChange}
				/>
				</div>
			</div>
			<div className='mt-3'>
				<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
				<label htmlFor='postcode' className='block text-m font-medium leading-6 text-gray-900'>Postcode</label>
				<input 
					name='postcode'
					placeholder='PostCode'
					value={formData.postcode}
					onChange={handleChange}
				/>	
				</div>
			</div>
			
				<div>
				<button className='justify-center items-center mt-3 py-4'>Create Account</button>
				</div>
			
		</div>
	</form>
	)
}


export default Form
