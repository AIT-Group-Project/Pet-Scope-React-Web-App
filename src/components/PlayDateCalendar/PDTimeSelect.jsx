import React, { useContext } from 'react';
import PlayDateContext from '../../contexts/PlayDateContextProvider';

const PDTimeSelect = () => {
    const timeOptions = ['08:00 AM','09:00 AM','10:00 AM','2:00 PM','3:00 PM'];
    const timeDatabaseFormatted = ['08:00:00','09:00:00','10:00:00','14:00:00','15:00:00'];
    const { setSelectedTime } = useContext(PlayDateContext);

    const handleTimeSelect = (btnText) => {
        const v1 = timeOptions.indexOf(btnText);
        const v2 = timeDatabaseFormatted[v1];
        setSelectedTime(v2);
    }

    return (
        <div className='w-full flex'>
            <div className='mx-auto m-2'>
                <p>Please Select a Time</p>
                <>
                    {timeOptions.map((time, index) => {
                        return(
                            <button
                                key={index}
                                className='block mx-auto'
                                onClick={(e) => handleTimeSelect(e.target.innerText)}
                            >{time}</button>
                        )
                    })}
                </>
            </div>
        </div>
    )
}

export default PDTimeSelect;