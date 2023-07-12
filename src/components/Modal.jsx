import React, { useState } from 'react';
//import './Modal.css';
import Login from './Login';
import Register from './Register';

export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('overflow-visible')
    } else {
        document.body.classList.remove('overflow-visible')
    }

    const FormButton = ({value, customFunc, color}) => (
        <button
            onClick={() => customFunc()}
            style={{color}}
            className='relative text-xl rounded-full p-3 m-1 bg-slate-600'
        >
            {value}
        </button>
    );

    const [formPage, setFormPage] = useState(true);
    
    const toggleFormPage = () => {
        setFormPage(!formPage);
    }

    return (
        <>
            <button onClick={toggleModal} className='block text-lg text-[blue] dark:text-[white] mx-0 my-auto p-0'>
                Login
            </button>
            {modal && (
                <div className='-screen h-screen fixed inset-0 '>
                    <div onClick={toggleModal} className='w-screen h-screen fixed inset-0 bg-black/[0.8]'></div>
                    <div className='fixed -translate-x-2/4 -translate-y-2/4 leading-[1.4] max-w-[700px] min-w-[400px] px-7 py-3.5 rounded-[3px] left-2/4 top-[40%] bg-slate-200 dark:bg-slate-700'>
                        <div className='inline'>
                            <FormButton
                                customFunc={toggleFormPage}
                                value={'login / Register'}
                                color={'red'}
                            />
                            <div>
                                {formPage ? (
                                    <div>
                                        <Login />
                                    </div>
                                ) : (
                                    <div>
                                        <Register />
                                    </div>
                                )}
                            </div>
                        </div>
                        <button className='absolute px-[7px] py-[5px] right-2.5 top-2.5 text-black dark:text-white' onClick={toggleModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}       
        </>
    );

}