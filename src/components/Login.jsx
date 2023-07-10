import React from 'react';

export default function Login() {
const FormLabel = ({type, value, input}) => (
    <label
        type={type}
        className='w-full'
    >
        <p>{value}</p>
        <input
            type={input}
            className='w-full'
        />
    </label>
)
  return(
    <form className='font-semibold'>
    <FormLabel 
        type={'text'}
        value={'Email'}
        input={'input'}
    />
    <FormLabel 
        type={'text'}
        value={'Password'}
        input={'password'}
    />

      <div className = 'relative text-xl rounded-full p-3 hover:bg-yellow-400'>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}