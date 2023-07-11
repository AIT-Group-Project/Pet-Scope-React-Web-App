/*import React, { useEffect, useState } from 'react'

const Darkmode = () => {
    const [theme, setTheme] = useState ("dark");
    const element = document.documentElement

    const options =[
        {
            icon: "sunny",
            text:'light'
        },
        {
            icon:"moon",
            text:'dark'
        },
        {
            icon:"desktop-outline",
            text:'system'
        }
    ];

    useEffect(() =>{
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                break;
            case 'light':
                element.classList.remove('dark');
                break;
            default:
                break;

        }
    }, [theme]);
  return (
    <div>
        {
            options?.map(opt=>(
            <button 
            key={opt.text}
            onClick={() => setTheme(opt.text)} 
            className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && "text-sky-600"}`}
            >
                <ion-icon name={opt.icon}></ion-icon>
            
            </button>
                
            ))
        }
    </div>
  )
}

export default Darkmode */