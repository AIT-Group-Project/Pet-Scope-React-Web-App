import { createContext, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(false); // toggle 
    const [userData, setUserData] = useState([]);

    return (
        <UserContext.Provider value={{  
            user, 
            setUser,
            userData,
            setUserData,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;