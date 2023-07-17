import React from 'react';
import { NavLink } from 'react-router-dom';
import Darkmode from './Darkmode';
import Modal from './Modal';

const NavLinks = ({title, color, route}) => (
    <NavLink
        to={route}
        className='relative text-xl rounded-full p-3 hover:bg-yellow-400 dark:text-white'
    >
        {title}
    </NavLink>
);

const Navbar = () => {

  return (
    <div className='flex justify-between p-2 bg-green-500 dark:bg-slate-700 relative'>
        <div className='relative text-xl rounded-full p-3 hover:bg-yellow-400'>
            <Modal />
        </div> 
        <div className='flex'>
            <NavLinks 
                title={'Home'}
                route={'/home'}
            />
            <NavLinks 
                title={'Staff'}
                route={'/staff'}
            />
            <NavLinks 
                title={'Services'}
                route={'/services'}
            />
            <NavLinks 
                title={'About Us'}
                route={'/about-us'}
            />

        </div>
        <Darkmode />
    </div>
  );
};

export default Navbar;