import { createContext, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(false); // toggle 
    const [userData, setUserData] = useState([]);
    const [vinceMode, setVinceMode]= useState (false);

    return (
        <UserContext.Provider value={{  
            user, 
            setUser,
            userData,
            setUserData,
            vinceMode, 
            setVinceMode
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;