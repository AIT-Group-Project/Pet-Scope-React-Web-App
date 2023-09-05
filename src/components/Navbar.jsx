// https://i.imgur.com/XPvIBap.png
import React from 'react';
import Modal from './Modal';
import { NavLink } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import Darkmode from './Darkmode';

const NavLinks = ({title, route}) => (
    <NavLink
        to={route}
        className='block text-xl rounded-lg m-2 px-3 py-2 hover:bg-emerald-600 text-black font-semibold dark:hover:bg-slate-500 dark:text-white'
    >
        {title}
    </NavLink>
);

const Navbar = () => {

    const { activeUser, setActiveUser } = useStateContext();
    //setActiveUser(true); //debug

    return (
        <nav className="bg-cyan-400 dark:bg-gray-700 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Buttons */}
                <div className="flex flex-1 justify-start space-x-4">
                    <Modal />
                    <>
                        {activeUser ? (
                        <>
                            <NavLinks 
                                title={'Profile'}
                                route={'/user-profile'}
                            />
                        </>
                        ) : (<></>)
                        }
                    </>
                </div>

                {/* Center Buttons */}
                <div className="flex flex-1 justify-center space-x-4 hidden md:flex">
                    <>
                        <NavLinks 
                            title={'Home'}
                            route={'/Home'}    
                        />
                        <NavLinks
                            title={'Staff'}
                            route={'/Staff'}
                        />
                        <NavLinks
                            title={'Play Date'}
                            route={'/Playdate'}
                        />
                        <NavLinks
                            title={'About Us'}
                            route={'/About-Us'}
                        />
                    </>
                </div>

                {/* Right Button */}
                <div className="flex flex-1 justify-end">
                    <Darkmode />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

