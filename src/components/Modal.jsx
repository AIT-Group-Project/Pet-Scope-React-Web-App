import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import { useStateContext } from '../contexts/ContextProvider';
import Logout from './Logout';


export default function Modal() {
    const { modal, setModal } = useStateContext();
    const { activeUser } = useStateContext();
    let btnText = ''

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('overflow-visible')
    } else {
        document.body.classList.remove('overflow-visible')
    }


    const [formPage, setFormPage] = useState(true);
    
    const toggleFormPage = () => {
        setFormPage(!formPage);
    }

    if (formPage) {
        btnText = 'Register'
    } else {
        btnText = 'Login'
    }

    return (
        <>
            <div>
            {activeUser ? (
                <div>
                    <Logout />
                </div>
            ) : (
                <div>
                    <button onClick={toggleModal} className='block text-xl rounded-lg m-2 px-3 py-2 hover:bg-yellow-400 text-blue-700 dark:bg-slate-500 dark:text-white'>
                        Login
                    </button>
                </div>
            )}
            </div>

            {modal && (
                <div className='-screen h-screen fixed inset-0 z-1000'>
                    <div onClick={toggleModal} className='w-screen h-screen fixed inset-0 bg-black/[0.8]'></div>
                    <div className='fixed -translate-x-2/4 -translate-y-2/4 leading-[1.4] max-w-[700px] min-w-[400px] px-7 py-3.5 rounded-[3px] left-2/4 top-[40%] bg-slate-200 dark:bg-slate-700'>
                        <div className='inline'>
                            <div>
                                <button className='relative text-xl rounded-lg p-3 mx-1 my-2 bg-slate-300 dark:bg-slate-500 dark:text-white dark:hover:bg-slate-500/[0.5]'  onClick={toggleFormPage}>{btnText}</button>
                            </div>
                            <div>
                                {formPage ? (
                                    <div>
                                        <div className='flex w-full'>
                                            <p className='m-auto dark:text-white'>Login Form</p>
                                        </div>
                                        <Login />
                                    </div>
                                ) : (
                                    <div>
                                        <div className='flex w-full'>
                                            <p className='m-auto dark:text-white'>Register Form</p>
                                        </div>
                                        <Register />
                                    </div>
                                )}
                            </div>
                        </div>
                        <button className='absolute px-3 py-1 right-7 top-5 rounded-full bg-slate-300 dark:bg-slate-500 dark:hover:bg-slate-500/[0.5] text-black dark:text-white' onClick={toggleModal}>X</button>
                    </div>
                </div>
            )}       
        </>
    );

}