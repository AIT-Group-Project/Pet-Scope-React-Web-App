import React from 'react';
import { NavLink } from 'react-router-dom';
import Darkmode from './Darkmode';
import Modal from './Modal';

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

  return (
    <div className='flex justify-between p-2 bg-green-500 dark:bg-slate-700 md:mx-6 relative'>
        <div className='relative text-xl rounded-full p-3 hover:bg-yellow-400'>
            <Modal />
        </div> 
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
        <Darkmode />
    </div>
  );
};

export default Navbar;