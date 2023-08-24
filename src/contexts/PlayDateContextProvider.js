/* this context is for PlayDate components States that will be used for sending axios requests */
import { createContext, useState } from "react";

const PlayDateContext = createContext();

export const PlayDateContextProvider = ({ children }) => {
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [allUsersList, setAllUsersList] = useState([]);

    return (
        <PlayDateContext.Provider value={{ 
            selectedTime,
            setSelectedTime,
            selectedDate,
            setSelectedDate,
            allUsersList,
            setAllUsersList
        }}>
            {children}
        </PlayDateContext.Provider>
    )
}

export default PlayDateContext;