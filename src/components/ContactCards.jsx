import React, { useState } from 'react'
import BlankCard from './BlankCard';




const ContactCards = () => {
    const NameStyle = useState ('text-gray-700 dark:text-white font-semibold mb-2 center');
    const MainStyle = useState ('text-center mt-6 center');
    const FigureStyle = useState ('bg-white dark:bg-slate-700 h-80 rounded-lg shadow-md pt-7 center');
    const Middletext = useState ('text-gray-300 dark:text-white')
//  return (
//     <>
//         <figure className={`${FigureStyle}`}>
//             <img 
//                 alt="User"
//                 className="w-32 h-32 rounded-full mx-auto"
//                 src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
//             />
//             <figcaption className={`${MainStyle}`}>
//                 <p className={`${NameStyle}`}>
//                     Christopher Osborn
//                 </p>
//                 <p className={`${Middletext}`}>
//                    <span className='font-medium'> Email: </span> Christopher.Osborn@test.com
//                 </p>
//                 <p className={`${Middletext}`}>
//                     <span className='font-medium'>Phone:</span> 555-555-555
//                 </p>
//             </figcaption>
//         </figure>
//         <figure className={`${FigureStyle}`}>
//             <img 
//                 alt="User"
//                 className="w-32 h-32 rounded-full mx-auto"
//                 src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
//             />
//             <figcaption className={`${MainStyle}`}>
//                 <p className={`${NameStyle}`}>
//                     Jarrod Williams
//                 </p>
//                 <p className={`${Middletext}`}>
//                    <span className='font-medium'> Email: </span> jarrod.williams@test.com
//                 </p>
//                 <p className={`${Middletext}`}>
//                     <span className='font-medium'>Phone:</span> 555-555-555
//                 </p>
//             </figcaption>
//         </figure>
//         <figure className={`${FigureStyle}`}>
//             <img 
//                 alt="User"
//                 className="w-32 h-32 rounded-full mx-auto"
//                 src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
//             />
//             <figcaption className={`${MainStyle}`}>
//                 <p className={`${NameStyle}`}>
//                     Cameron Swiggs
//                 </p>
//                 <p className={`${Middletext}`}>
//                    <span className='font-medium'> Email: </span> cameron.swiggs@test.com
//                 </p>
//                 <p className={`${Middletext}`}>
//                     <span className='font-medium'>Phone:</span> 555-555-555
//                 </p>
//             </figcaption>
//         </figure>
//         <figure className={`${FigureStyle}`}>
//             <img 
//                 alt="User"
//                 className="w-32 h-32 rounded-full mx-auto"
//                 src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
//             />
//             <figcaption className={`${MainStyle}`}>
//                 <p className={`${NameStyle}`}>
//                     Addison Golden
//                 </p>
//                 <p className={`${Middletext}`}>
//                    <span className='font-medium'> Email: </span> Addison@test.com
//                 </p>
//                 <p className={`${Middletext}`}>
//                     <span className='font-medium'>Phone:</span> 555-555-555
//                 </p>
//             </figcaption>
//         </figure>
//     </>
//   )

return (
    <><div>
        <BlankCard>

        </BlankCard>
    </div><div>
            <BlankCard>

            </BlankCard>
        </div></>
)

}

export default ContactCards