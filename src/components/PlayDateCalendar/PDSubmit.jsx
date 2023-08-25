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

    const handleSubmit = () => {
        // get all info for a PlayDate and make an axios request to create a play date in the DB
    };
    
    const resetCalendar = () => {
        // set calendar states back to default
    };

    return (
        <>
            {showSubmitMessage ? (
                <>
                    <p className='text-center dark:text-white dark:bg-black'>Would you like to send a Play Date Request to <br></br>{`${props.value}`}</p>
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
                </>
            ): (
            <></>
            )}
        </>
    )
};

export default PDSubmit;