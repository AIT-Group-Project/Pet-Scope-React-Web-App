import React, { useState } from 'react'

export default function Darkmode() {

    const[theme, setTheme]= useState ('false');
    const toggleTheme = () => {
        setTheme(!theme);
    };

    if(theme) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
  return (
    <div>
        <button onClick={toggleTheme} className='w-8 h-8 leading-9 text-2xl rounded-full m-2'>
            {theme ? <ion-icon name="moon"></ion-icon> : <ion-icon name="sunny"></ion-icon>}
            
        </button>


    </div>
  )
}

