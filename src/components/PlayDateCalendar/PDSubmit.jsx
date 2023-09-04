import React, { useContext, useState, useEffect } from 'react';
import PlayDateContext from '../../contexts/PlayDateContextProvider';
import { PDSubmitButton } from '..';
import AuthContext from '../../contexts/AuthProvider';
import axios from '../../api/axios';
const PLAYDATES_URL = '/playdate';

const PDSubmit = (props) => {
    const { selectedReceiver, setSelectedReceiver, setSelectedDate, setSelectedTime, setShowRecivier, setShowTimeOptions } = useContext(PlayDateContext);
    const [showSubmitMessage, setShowSubmitMessage] = useState(false);
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        if (selectedReceiver.display && selectedReceiver.database !== null) {
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

    const handleSubmit = async () => {
        const data = {
            date: formatDate(props.date),
            time: props.time.database,
            receiver: props.receiver.database,
            sender: auth.userId
        }
        console.log('Play Date data:', data) // debug
        // get all info for a PlayDate and make an axios request to create a play date in the DB
        try {
            const response = await axios.post(PLAYDATES_URL,
              JSON.stringify({...data}),
              {
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.accessToken}`
                },
                withCredentials: true
              }
            );
            console.log('responseSubmit', response)
            resetCalendar();
        } catch (error) {
            console.error('failed to submit playdate', error);
        }


    };
    
    const resetCalendar = () => {
        // set calendar states back to default
        // showTimeOptions toggle in PDCalendar.jsx needs to be added to playdate context provider to toggle from this component 
        setShowSubmitMessage(false);
        setShowRecivier(false);
        setShowTimeOptions(false);
        setSelectedReceiver({display: null, database: null});
        setSelectedTime({display: null, database: null});
        setSelectedDate(null);
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