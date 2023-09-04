import React from 'react';

const Card = (props) => {
    const imgStyles = 'w-20 h-20 rounded-full mx-auto';
    const cardStyles = 'text-center bg-slate-300 w-1/4 m-1';

    return (
        <div className={`${cardStyles} ${props?.className}`}>
            <img 
                alt="User"
                className={imgStyles} 
                src={props.user.img}
            />
            <p>{props.user.name}</p>
            <p>{props.user.email}</p>
            <p>{props.user.phone}</p>
        </div>
    )
}

export default Card