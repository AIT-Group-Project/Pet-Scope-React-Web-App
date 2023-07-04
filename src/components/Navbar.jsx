import React, { useEffect } from 'react';
// import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, color }) => (
    <button
        name={title}
        type='button'
        onClick={() => customFunc()}
        style={{ color }}
        className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
    </button>
);

const Navbar = () => {

    const handleButtonClick = () => {
        console.log('button clicked')
    }

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
        <NavButton
        title={'button 1'}
        customFunc={() => handleButtonClick()}
        color='blue'
        />
    </div>
  );
};

export default Navbar;