import React,{ Component } from 'react'

class Form extends Component{
constructor(props){
	super(props)
	this.state = { petname:'',name:'', age:null, address:'',phoneNo:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const { petname, dogorcat, age, address, phoneNo } = this.state
	event.preventDefault()
	alert(`
	____Your Details____\n
	PetName : ${petname}
	Name : ${dogorcat}
	Age : ${age}
	Address : ${address}
	Phone No : ${phoneNo}
	`)
}

// Method causes to store all the values of the
// input field in react state single method handle
// input changes of all the input field using ES6
// javascript feature computed property names
handleChange(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}

// Return a controlled form i.e. values of the
// input field not stored in DOM values are exist
// in react component itself as state
render(){
	return(
	<form onSubmit={this.handleSubmit} className='flex flex-1 justify-center space-x-4 hidden md:flex'>
		<div className='space-y-12'>
			<div className='border-b broder-gray-900/10 pb-12'>
				<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
				<label htmlFor='petname' className='block text-sm font-medium leading-6 text-gray-900'>Pet Name</label>
				<input
					name='petname'
					placeholder='Pet Name'
					value = {this.state.petname}
					onChange={this.handleChange}
				/>
				</div>
				<div className='mt-3'>
					<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
					<label htmlFor='dogorcat'>Dog or cat</label>
					<input
						name='dogorcat'
						placeholder='Dog or Cat'
						value={this.state.name}
						onChange={this.handleChange}
					/>
					</div>
				</div>
			</div>
				<div>
				<label htmlFor='age'>Age</label>
				<input
					name='age'
					placeholder='Age'
					value={this.state.age}
					onChange={this.handleChange}
				/>
				</div>
				<div>
				<label htmlFor='address'>Address</label>
				<input
					name='address'
					placeholder='Address'
					value={this.state.address}
					onChange={this.handleChange}
				/>
				</div>
				<div>
				<label htmlFor='phoneNo'>Phone Number</label>
				<input
					name='phoneNo'
					placeholder='Phone No'
					value={this.state.phoneNo}
					onChange={this.handleChange}
				/>
				</div>
				<div>
				<button>Create Account</button>
				</div>
			
		</div>
	</form>
	)
}
}

export default Form
