import React, { useContext } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import PlayDateContext from '../../contexts/PlayDateContextProvider';
import { PDTimeSelect, PDReceiverDropdown, PDSubmit } from '..';

const PDCalendar = () => {
    const { selectedDate, setSelectedDate } = useContext(PlayDateContext);
    const today = new Date();

    return (
        <div className='w-full flex'>
            <div className='mx-auto m-2'>
                <p className='pb-2 px-2.5 font-semibold text-xl dark:text-white text-center'>Play Date Calendar</p>
                <Calendar 
                    onChange={setSelectedDate}
                    value={selectedDate}
                    minDate={today} // makes sure that the calendar only allows future dates to be selected
                />
                <PDTimeSelect />
                <PDReceiverDropdown />
                <PDSubmit />
            </div>
        </div>
    )
};

export default PDCalendar;