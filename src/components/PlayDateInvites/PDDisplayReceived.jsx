import React from 'react'

const PDDisplayReceived = (props) => {
    const styles = 'w-full py-2 m-1 rounded-lg dark:bg-slate-300'
  return (
    <div className='flex'>
        <div className='mx-auto'>
            <div className='p-2'>
                <p>Sender: {props.PDSenderName}</p>
                <p>Recevier: {props.PDReceiverName}</p>
                <p>Date: {props.PDDate}</p>
                <p>Time: {props.PDTime}</p>
                <p>confirmed: {props.PDConfirmed}</p>
            </div>
            <>
                <button className={styles}>confirm</button>
                <button className={styles}>cancle</button>
            </>
        </div>
    </div>
  )
}

export default PDDisplayReceived