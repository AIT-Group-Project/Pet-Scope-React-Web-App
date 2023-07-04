import React from 'react';
import { NavLink } from 'react-router-dom';

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

const NavLinks = ({title, color, route}) => (
    <NavLink
        to={route}
        style={{color}}
        className='relative text-xl rounded-full p-3 hover:bg-yellow-400'
    >
        {title}
    </NavLink>
);

const Navbar = () => {

    const handleButtonClick = () => {
        console.log('button clicked')
    }

  return (
    <div className='flex justify-between p-2 bg-green-500 md:mx-6 relative'>
        <NavButton
        title={'button'}
        customFunc={() => handleButtonClick()}
        color='blue'
        />
        <div className='flex'>
            <NavLinks 
                title={'Home'}
                color={'blue'}
                route={'/home'}
            />
            <NavLinks 
                title={'Staff'}
                color={'blue'}
                route={'/staff'}
            />
            <NavLinks 
                title={'Services'}
                color={'blue'}
                route={'/services'}
            />
            <NavLinks 
                title={'About Us'}
                color={'blue'}
                route={'/about-us'}
            />

        </div>
    </div>
  );
};

export default Navbar;