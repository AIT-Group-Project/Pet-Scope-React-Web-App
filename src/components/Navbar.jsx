import React from 'react';
import { NavLink } from 'react-router-dom';
import Darkmode from './Darkmode';
import Modal from './Modal';

const NavLinks = ({title, route}) => (
    <NavLink
        to={route}
        className='block text-xl rounded-lg m-2 px-3 py-2 hover:bg-emerald-600 text-black dark:hover:bg-slate-500 dark:text-white'
    >
        {title}
    </NavLink>
);

const Navbar = () => {

  return (
    <div className='flex justify-between p-2 bg-cyan-400 dark:bg-slate-700 relative'>
        <div className='relative'>
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
        <div className='p-2 m-0'>
            <Darkmode />
        </div>
    </div>
  );
};

export default Navbar;