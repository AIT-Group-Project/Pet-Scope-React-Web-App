import React from 'react';

export default function Login() {
  return(
    <form className='font-semibold'>
      <label>
        <p>
            Username            
        </p>
        <input type="text" />
      </label>
      <label>
        <p>
            Password
        </p>
        <input type="password" />
      </label>
      <div className = 'relative text-xl rounded-full p-3 hover:bg-yellow-400'>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}