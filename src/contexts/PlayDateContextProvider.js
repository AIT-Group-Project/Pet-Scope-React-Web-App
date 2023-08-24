import { createContext, useState } from "react";

const PlayDateContext = createContext();

export const PlayDateContextProvider = ({ children }) => {
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <PlayDateContext.Provider value={{ 
            selectedTime,
            setSelectedTime,
            selectedDate,
            setSelectedDate
        }}>
            {children}
        </PlayDateContext.Provider>
    )
}

export default PlayDateContext;