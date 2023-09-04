import React, { useContext, useState, useEffect } from 'react';
import PlayDateContext from '../../contexts/PlayDateContextProvider';
import { PDSubmitButton } from '..';

const PDSubmit = (props) => {
    const { selectedReceiver } = useContext(PlayDateContext);
    const [showSubmitMessage, setShowSubmitMessage] = useState(false);

    useEffect(() => {
        if (selectedReceiver !== null) {
            setShowSubmitMessage(true);
        }
    }, [selectedReceiver])

    const formatDate = (date) => {
        let newDate = new Date(date).toLocaleDateString('en-AU', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).split('/').reverse().join('-'); // This ensures the date format is in 'YYYY-MM-DD'
        return newDate;
    }

    // function timeConverter (time) {
    //     // Check correct time format and split into components
    //     time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
      
    //     if (time.length > 1) { // If time format correct
    //       time = time.slice (1);  // Remove full string match value
    //       time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    //       time[0] = +time[0] % 12 || 12; // Adjust hours
    //     }
    //     return time.join (''); // return adjusted time or original string
    //   }

    const handleSubmit = () => {
        const data = {
            date: formatDate(props.date),
            time: props.time,
            receiver: props.receiver,
        }
        console.log('Play Date data:', data) // debug
        // get all info for a PlayDate and make an axios request to create a play date in the DB
    };
    
    const resetCalendar = () => {
        // set calendar states back to default
        // showTimeOptions toggle in PDCalendar.jsx needs to be added to playdate context provider to toggle from this component 
        setShowSubmitMessage(false);

    };

    // need to display the actual name and 12h time may need separate props to carry the first & last name values to be displayed in this component
    // currently
    // props.receiver is the user_id
    // props.time is in 24h time 
    return (
        <>
            {showSubmitMessage ? (
                <>
                    <div className='p-3 dark:bg-slate-700'>
                        <p className='text-center dark:text-white'>
                            Would you like to send a Play Date Request to 
                            <br></br> {`${props.receiver.display}`} at the time {props.time.display} on
                            <br></br> {`${props.date.toDateString()}`}
                        </p>
                        <div className='w-full flex'>
                            <div className='mx-auto m-2'>
                                <PDSubmitButton 
                                    innerText={'Submit'}
                                    customFunc={handleSubmit}
                                />
                                <PDSubmitButton 
                                    innerText={'Reset'}
                                    customFunc={resetCalendar}
                                />
                            </div>
                        </div>
                    </div>
                </>
            ) : (
            <></>
            )}
        </>
    )
};

export default PDSubmit;