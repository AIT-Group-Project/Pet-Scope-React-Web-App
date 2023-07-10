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
            className='w-full p-1 mb-1 mt-1'
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

      <div className = 'relative text-xl text-center rounded-full p-3 mt-1 hover:bg-yellow-400'>
        <button 
          type="submit"
          className='w-full'
          >
            Submit
          </button>
      </div>
    </form>
  )
}