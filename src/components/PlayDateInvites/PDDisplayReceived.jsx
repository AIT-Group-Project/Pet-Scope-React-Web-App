import { InviteConfirm } from './InviteConfirm';

const PDDisplayReceived = (props) => {
    const stylesheader = 'font-bold underline text-lg';
    const stylesinfo= '';
    const InviteTrue = "T"
    const InviteFalse = "F"
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
        let formattedTime = newTime[1].replace('Z', '').slice(0, -4); // This ensures that the time is set to 12hr time with AM and PM'
        return getTwelveHourTime(formattedTime);
    }

    // Changes the single letter response into a proper response'
    const formatConfirm = (confirmed) => {
        if (confirmed === "T") {
            confirmed = "Accepted"
            return confirmed;
        }
        if (confirmed === "F") {
            confirmed = "Declined"
            return confirmed;
        }
        if (confirmed === null) {
            confirmed = "Pending"
            return confirmed;
        }};
    
    // If a receiver user is deleted from the database or is null sends through Unknown/Deleted User
    const formatReceiver = (receiver) => {
        if (receiver === ' '){
            receiver = "Unknown/Deleted User"
            return receiver;
        }
        if (receiver === null){
            receiver = "Unknown/Deleted User"
            return receiver;
        }
        else{
            return receiver;
        }};

    // If a sender user is deleted from the database or is null sends through Unknown/Deleted User
    const formatSender = (sender) => {
        if (sender === ' '){
            sender = "Unknown/Deleted User"
            return sender;
        }
        if (sender === null){
            sender = "Unknown/Deleted User"
            return sender;
        }
        else{
            return sender;
        }}; 

  return (
    //returns the response from the DB into formatted Cards
    <div className='p-4 mx-auto border-t dark:text-black font-semibold grid grid-cols-1 gap-10 border-slate-700 '>
        <div>
            <div className='text-center'>
                <p className= {`${stylesheader}`}>Sender</p>
                <p className= {`${stylesinfo}`}>{formatSender(props.PDSenderName)}</p>
                <p className= {`${stylesheader}`}>Recevier</p>
                <p className= {`${stylesinfo}`}>{formatReceiver(props.PDReceiverName)}</p>
                <p className= {`${stylesheader}`}>Date</p>
                <p className= {`${stylesinfo}`}>{formatDate(props.PDDate)}</p>
                <p className= {`${stylesheader}`}>Time</p>
                <p className= {`${stylesinfo}`}>{formatTime(props.PDTime)}</p>
                <p className= {`${stylesheader}`}>Confirmed?</p>
                <p className= {`${stylesinfo}`}>{formatConfirm(props.PDConfirmed)}</p>
            </div>
                <InviteConfirm
                    id ={props.PDID}
                    confirm = {InviteTrue}
                    innertext = {"Confirm"}
                />
                <InviteConfirm
                    id ={props.PDID}
                    confirm = {InviteFalse}
                    innertext = {"Decline"}
                />
        </div>
    </div>
  )
}



export default PDDisplayReceived;