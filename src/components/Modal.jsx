import React, { useState } from 'react';
import './Modal.css';
import Login from './Login';
import Register from './Register';

export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
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
            <button onClick={toggleModal} className='btn-modal'>
                Login
            </button>
            {modal && (
                <div className='modal'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className='modal-content'>
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
                        <button className='close-modal' onClick={toggleModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}       
        </>
    );

}