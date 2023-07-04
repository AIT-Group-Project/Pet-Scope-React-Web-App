import React, { useEffect } from 'react';
// import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, color }) => (
    <button
        type='button'
        onClick={() => customFunc()}
        style={{ color }}
        className='relative text-xl rounded-full p-3 hover:bg-yellow-400'
    >
        {title}
    </button>
);

const Navbar = () => {

    const handleButtonClick = () => {
        console.log('button clicked')
    }

  return (
    <div className='flex justify-between p-2 bg-green-500 md:mx-6 relative'>
        <NavButton
        title={'button 1'}
        customFunc={() => handleButtonClick()}
        color='blue'
        />
        <div className='flex'>
            <NavButton 
            title={'button'}
            customFunc={() => handleButtonClick()}
            color={'blue'}
            />
            <NavButton 
            title={'button'}
            customFunc={() => handleButtonClick()}
            color={'blue'}
            />
            <NavButton 
            title={'button'}
            customFunc={() => handleButtonClick()}
            color={'blue'}
            />
        </div>
    </div>
  );
};

export default Navbar;