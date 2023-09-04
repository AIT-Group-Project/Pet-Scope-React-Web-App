/* this context is for PlayDate components States that will be used for sending axios requests */
import { createContext, useState } from "react";

const PlayDateContext = createContext();

export const PlayDateContextProvider = ({ children }) => {
    const [selectedTime, setSelectedTime] = useState({display: null, database: null});
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedReceiver, setSelectedReceiver] = useState({display: null, database:null});
    const [allUsersMap, setAllUsersMap] = useState([]);

    return (
        <PlayDateContext.Provider value={{ 
            selectedTime,
            setSelectedTime,
            selectedDate,
            setSelectedDate,
            allUsersMap,
            setAllUsersMap,
            selectedReceiver,
            setSelectedReceiver
        }}>
            {children}
        </PlayDateContext.Provider>
    )
}

export default PlayDateContext;