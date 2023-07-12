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
        <button onClick={toggleTheme} className=''>
            Darkmode/theme 
        </button>


    </div>
  )
}

