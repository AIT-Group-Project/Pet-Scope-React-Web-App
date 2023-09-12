import React from 'react'

const PDDisplayReceived = (props) => {
    const styles = 'w-full py-2 m-1 rounded-lg dark:bg-slate-300';
    const timeOptions = ['08:00 AM','09:00 AM','10:00 AM','2:00 PM','3:00 PM'];
    const timeDatabaseFormatted = ['08:00:00','09:00:00','10:00:00','14:00:00','15:00:00'];

    const formatDate = (date) => {
        let newDate = new Date(date).toLocaleDateString('en-AU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',       
        }).split('/').join('-'); // This ensures the date format is in 'DD-MM-YYYY'
        return newDate;
    }

    const getTwelveHourTime = (time) => {
        const v1 = timeDatabaseFormatted.indexOf(time);
        const v2 = timeOptions[v1]
        return v2;
    }

    const formatTime = (time) => {
        const newTime = time.split('T');
        let formattedTime = newTime[1].replace('Z', '').slice(0, -4);
        return getTwelveHourTime(formattedTime);
    }

  return (
    <div className='flex'>
        <div className='mx-auto'>
            <div className='p-2'>
                <p>Sender: {props.PDSenderName}</p>
                <p>Recevier: {props.PDReceiverName}</p>
                <p>Date: {formatDate(props.PDDate)}</p>
                <p>Time: {formatTime(props.PDTime)}</p>
                <p>confirmed: {props.PDConfirmed}</p>
            </div>
            <>
                <button className={styles}>confirm</button>
                <button className={styles}>cancel</button>
            </>
        </div>
    </div>
  )
}

export default PDDisplayReceived