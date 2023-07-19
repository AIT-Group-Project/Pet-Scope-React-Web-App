import React, {createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState = {
    userProfile: false
}

export const ContextProvider = ({ children }) => {

    {/* Login.jsx */}
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    {/* Register.jsx */}
    const [registerFirstName, setRegisterFirstName] = useState('');
    const [registerLastName, setRegisterLastName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    {/* Modal.jsx */}
    const [modal, setModal] = useState(false);


    return (
        <StateContext.Provider value={{loginEmail, setLoginEmail, loginPassword, setLoginPassword, registerFirstName, setRegisterFirstName, registerLastName, setRegisterLastName, registerEmail, setRegisterEmail, registerPassword, setRegisterPassword, modal, setModal}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);