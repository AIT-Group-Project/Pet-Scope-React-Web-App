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

    const [activeUser, setActiveUser] = useState(false);

    const [showSelectionDropdown, setShowSelectionDropdown] = useState(false);
    const [showSubmitPlaydate, setShowSubmitPlaydate] = useState(false);
    const [showSelectPlaydateTime, setShowSelectPlaydateTime] = useState(true);


    return (
        <StateContext.Provider value={{showSelectPlaydateTime, setShowSelectPlaydateTime,showSubmitPlaydate, setShowSubmitPlaydate,showSelectionDropdown, setShowSelectionDropdown,registerFirstName, setRegisterFirstName, registerLastName, setRegisterLastName, registerEmail, setRegisterEmail, registerPassword, setRegisterPassword, modal, setModal, activeUser, setActiveUser}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);