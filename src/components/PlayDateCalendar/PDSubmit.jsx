import React from 'react';
import { PDSubmitButton } from '..';

const PDSubmit = () => {
    const handleSubmit = () => {
        // get all info for a PlayDate and make an axios request to create a play date in the DB
    };
    
    const resetCalendar = () => {
        // set calendar states back to default
    };

    return (
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

    )
};

export default PDSubmit;