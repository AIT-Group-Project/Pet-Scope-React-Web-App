// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import Darkmode from './Darkmode';
// import Modal from './Modal';
// import { useStateContext } from '../contexts/ContextProvider';

// const NavLinks = ({title, route}) => (
//     <NavLink
//         to={route}
//         className='block text-xl rounded-lg m-2 px-3 py-2 hover:bg-emerald-600 text-black dark:hover:bg-slate-500 dark:text-white'
//     >
//         {title}
//     </NavLink>
// );

// const Navbar = () => {
//     const { activeUser, setActiveUser } = useStateContext();
//  //  setActiveUser(true); //debug

//   return (
//     <div className='flex justify-between p-2 bg-cyan-400 dark:bg-slate-700 relative'>
//         <div className=' relative'>
//             <Modal />
//         </div> 
//         <div className='flex'>
//             <NavLinks 
//                 title={'Home'}
//                 route={'/home'}
//             />
//             <NavLinks 
//                 title={'Staff'}
//                 route={'/staff'}
//             />
//             <NavLinks 
//                 title={'PlayDate'}
//                 route={'/playdate'}
//             />
//             <NavLinks 
//                 title={'About Us'}
//                 route={'/about-us'}
//             />
//             <div>
//             {activeUser ? (
//                 <div>
//                     <NavLinks 
//                 title={'Profile'}
//                 route={'/user-profile'}
//             />
//                 </div>
//             ) : (
//                 <div>
                    
//                 </div>
//             )}
//             </div>
//         </div>
//         <div className='p-2 m-0'>
//             <Darkmode />
//         </div>
//     </div>
//   );
// };

// export default Navbar;




// https://i.imgur.com/XPvIBap.png
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Buttons */}
                <div className="flex flex-1 justify-start space-x-4">
                    <button className="bg-gray-700 px-4 py-2 rounded">Left1</button>
                    <button className="bg-gray-700 px-4 py-2 rounded">Left2</button>
                </div>

                {/* Center Buttons */}
                <div className="flex flex-1 justify-center space-x-4 hidden md:flex">
                    <button className="bg-gray-700 px-4 py-2 rounded">Center1</button>
                    <button className="bg-gray-700 px-4 py-2 rounded">Center2</button>
                    <button className="bg-gray-700 px-4 py-2 rounded">Center3</button>
                    <button className="bg-gray-700 px-4 py-2 rounded">Center4</button>
                    <button className="bg-gray-700 px-4 py-2 rounded">Center5</button>
                </div>

                {/* Right Button */}
                <div className="flex flex-1 justify-end">
                    <button className="bg-gray-700 px-4 py-2 rounded">Right</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

