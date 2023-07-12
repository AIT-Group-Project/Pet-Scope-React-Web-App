import React, {createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState = {
    userProfile: false
}

export const ContextProvider = ({ children }) => {

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');


    return (
        <StateContext.Provider value={{loginEmail, setLoginEmail, loginPassword, setLoginPassword}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);