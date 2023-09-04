import React from 'react'
import Card from './Card';

const CardContainer = () => {
    const list = [
        {
            name: 'chris',
            email: 'chris@email.com',
            phone: '555-555-555',
            img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
        },
        {
            name: 'jarrod',
            email: 'jarrod@email.com',
            phone: '555-555-555',
            img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
        },
        {
            name: 'cameron',
            email: 'cam@email.com',
            phone: '555-555-555',
            img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
        },
        {
            name: 'jane',
            email: 'jane@email.com',
            phone: '555-555-555',
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