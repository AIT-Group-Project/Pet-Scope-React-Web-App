import React, { useState } from 'react'

export default function Darkmode() {

    const[theme, setTheme]= useState ('false');
    const toggleTheme = () => {
        setTheme(!theme);
    };
    const togglemoon =[
        <ion-icon name="moon"></ion-icon>
    ];
    const togglesunny =[
        <ion-icon name="sunny"></ion-icon>
    ];

    if(theme) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
  return (
    <div>
        <button onClick={toggleTheme} className=''>
            {theme ? <ion-icon name="moon"></ion-icon> : <ion-icon name="sunny"></ion-icon>}
            
        </button>


    </div>
  )
}

