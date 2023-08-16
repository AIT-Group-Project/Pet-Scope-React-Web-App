import React, {createContext, useContext, useState} from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

    /* Register.jsx */
    const [registerFirstName, setRegisterFirstName] = useState('');
    const [registerLastName, setRegisterLastName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    /* Modal.jsx */
    const [modal, setModal] = useState(false);


    return (
        <StateContext.Provider value={{registerFirstName, setRegisterFirstName, registerLastName, setRegisterLastName, registerEmail, setRegisterEmail, registerPassword, setRegisterPassword, modal, setModal}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);