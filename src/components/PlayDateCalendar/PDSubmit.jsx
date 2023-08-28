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
        setShowSubmitMessage(false);

    };

    // need to display the actual name and 12h time may need separate props to carry the first & last name to be displayed in this component
    // currently
    // props.receiver is the user_id
    // props.time is in 24h time 
    return (
        <>
            {showSubmitMessage ? (
                <>
                    <div className='p-3 dark:bg-slate-700'>
                        <p className='text-center dark:text-white'>
                            Would you like to send a Play Date Request to <br></br> {`${props.receiver}`} at the time {`${props.time}`}
                        </p>
                        <div className='w-full flex'>
                            <div className='mx-auto m-2'>
                                <PDSubmitButton 
                                    innerText={'Yes'}
                                    customFunc={handleSubmit}
                                />
                                <PDSubmitButton 
                                    innerText={'No'}
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