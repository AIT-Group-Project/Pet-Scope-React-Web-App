import React, { useState } from 'react';
import './Modal.css';

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

    return (
        <>
            <button onClick={toggleModal} className='btn-modal'>
                Login
            </button>
            {modal && (
                <div className='modal'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className='modal-content'>
                        <h2>Hello</h2>
                        <p>modal text</p>
                        <button className='close-modal' onClick={toggleModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}       
        </>
    );

}