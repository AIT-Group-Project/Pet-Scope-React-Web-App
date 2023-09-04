import React, { useContext } from 'react';
import PlayDateContext from '../../contexts/PlayDateContextProvider';

const PDTimeSelect = () => {
    const timeOptions = ['08:00 AM','09:00 AM','10:00 AM','2:00 PM','3:00 PM'];
    const timeDatabaseFormatted = ['08:00:00','09:00:00','10:00:00','14:00:00','15:00:00'];
    const { setSelectedTime } = useContext(PlayDateContext);
    const btnStyle = 'block mx-auto px-5 py-1 m-1 w-full dark:bg-slate-200 transform motion-safe:hover:scale-110'

    const handleTimeSelect = (btnText) => {
        const v1 = timeOptions.indexOf(btnText);
        const v2 = timeDatabaseFormatted[v1];
        setSelectedTime({display: btnText, database: v2});
    }

    return (
        <div className='w-full flex'>
            <div className='mx-auto m-2'>
                <p className='pb-1 px-2.5 font-semibold text-xl dark:text-white'>Please Select a Time</p>
                <>
                    {timeOptions.map((time, index) => {
                        return(
                            <button
                                key={index}
                                className={`${btnStyle}`}
                                onClick={(e) => handleTimeSelect(e.target.innerText)}
                            >{time}</button>
                        )
                    })}
                </>
            </div>
        </div>
    )
};

export default PDTimeSelect;