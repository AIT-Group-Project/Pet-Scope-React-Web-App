import React from 'react'
import Card from './Card';

const CardContainer = () => {
    const list = [
        {
            name: 'Chris',
            email: 'Email: chris@email.com',
            phone: 'Phone: 555-555-555',
            img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
        },
        {
            name: 'Jarrod',
            email: 'Email: jarrod@email.com',
            phone: 'Phone: 555-555-555',
            img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
        },
        {
            name: 'Cameron',
            email: 'Email: cam@email.com',
            phone: 'Phone: 555-555-555',
            img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
        },
        {
            name: 'Jane',
            email: 'Email: jane@email.com',
            phone: 'Phone: 555-555-555',
            img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
        },
    ];


  return (
    <div className='flex justify-center'>
        {list.map((user, index) => {
            return (
                <Card key={index} user={user}/>
            )
        })}

    </div>
    
  )
}

export default CardContainer