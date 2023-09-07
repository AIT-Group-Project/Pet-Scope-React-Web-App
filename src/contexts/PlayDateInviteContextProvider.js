import { createContext, useState } from "react";

const PlayDateInviteContext = createContext();

export const PlayDateInviteContextProvider = ({ children }) => {
    const [allInvitesMap, setallInvitesMap] = useState([]);
    const [SelectedInvite, setSelectedInvite] = useState(null);

    return (
        <PlayDateInviteContext.Provider value={{ 
            allInvitesMap,
            setallInvitesMap,
            SelectedInvite,
            setSelectedInvite
        }}>
            {children}
        </PlayDateInviteContext.Provider>
    )
}

export default PlayDateInviteContext;