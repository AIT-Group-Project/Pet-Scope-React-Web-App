import React, { useCallback, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../contexts/AuthProvider';
import { useStateContext } from '../contexts/ContextProvider';

function PlayDateTimes(props) {

  const { auth } = useContext(AuthContext);
  const [selectedCalendarTime, setSelectedCalendarTime] = useState(null);
  const { showSelectionDropdown, setShowSelectionDropdown } = useStateContext();
  const { showSubmitPlaydate, setShowSubmitPlaydate } = useStateContext();
  const { showSelectPlaydateTime, setShowSelectPlaydateTime } = useStateContext();
  const [selectionOptions, setSelectionOptions] = useState(['']);
  const [selectedUser, setSelectedUser] = useState();
  const [selectedPlaydateDate, setSelectedPlaydateDate] = useState('');
  const [selectedReceiverUserId, setSelectedReceiverUserId] = useState();
  const timeOptions = ['08:00 AM','09:00 AM','10:00 AM','2:00 PM','3:00 PM'];
  const timeDatabaseFormatted = ['08:00:00','09:00:00','10:00:00','14:00:00','15:00:00'];
  
  useEffect(() => {
    const formattedDate = new Date(props.date).toLocaleDateString('en-AU', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).split('/').reverse().join('-'); // This ensures the date format is in 'YYYY-MM-DD'
    setSelectedPlaydateDate(formattedDate);
  }, [props.date]);

  // function displayInfo(e) {
  //   setInfo(true);
  // };
  const toggleDisplayInfo = () => {
    setShowSelectionDropdown(!showSelectionDropdown);
  }

  const displayUserInfo = (e) => {
    setShowSubmitPlaydate(true);
    setShowSelectionDropdown(false);
    setShowSelectPlaydateTime(false);
  };

  const userSelection = event =>{
    console.log(event.target.innerText);
    console.log(event);
    setSelectedUser(event.target.innerText);
    displayUserInfo();
  };

  const handleSelectedTime = useCallback(async (value) => {
    const v1 = timeOptions.indexOf(value);
    const v2 = timeDatabaseFormatted[v1];
    setSelectedCalendarTime(v2);
    handleResponse();
    toggleDisplayInfo();
  },[selectedCalendarTime]);

  const handleSubmitNo = () => {
    console.log('handleNo') // debug
    window.location.reload(false)
  };

  const handleResponse = async () => {
    const resData = await getAllUsers();
    setSelectionOptions(resData);
  };
  
  const setOptionSelection = (val) => {
    setSelectedReceiverUserId(val.user_id);
  };

  const getAllUsers = async () => {
    const response = await axios.get(`http://localhost:3500/users`,
    {
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.accessToken}`
     },
      withCredentials: true
    })
    console.log('func data', response)
    return response.data;
  };

  const handlePlaydateSubmit = async () => {
    console.log('req data: ', selectedPlaydateDate, selectedCalendarTime); // debug
    const response = await axios.post(`http://localhost:3500/playdate`, {
      'senderUserId': auth.userId,
      'receiverUserId': selectedReceiverUserId,
      'playDate': selectedPlaydateDate,
      'playTime': selectedCalendarTime
    },         
    {
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.accessToken}`
     },
      withCredentials: true
    })
    console.log('response: ', response) // debug
  };

  return (
    <div>
      <div>
        {showSelectPlaydateTime ?
          'Please Select a Time'
          : null}
      </div>

      <div>  
        {timeOptions.map((time, index) => {
          return (
            <div key={index}>
              {showSelectPlaydateTime ?
              <button
                className='dark:bg-slate-500 w-1/2 p-1 m-1 dark:focus:border-white focus:border-2'
                onClick={(e) => handleSelectedTime(e.target.innerText)}
              >{time}</button>
              : null}
            </div>  
          )
        })}
      </div>
      <div className='my-1'>
        <div>
          {showSelectionDropdown ?
            <>
              <p>Please Select A User</p>
              <select value={selectedUser} onChange={(e) => userSelection(e)} defaultValue="none">
                <option value={'none'} disabled hidden></option>
                {Object.entries(selectionOptions).map(([key, val]) => (
                  <option key={key} value={val} id={val.user_id} onClick={setOptionSelection(val)}>{`${val.first_name} ${val.last_name}`}</option>
                ))}
              </select>
            </>
          : null}
        </div>

        <div> 
          {showSubmitPlaydate ? `Would You Like To Send ${selectedUser}. This Invite ${selectedCalendarTime} ${props.date.toDateString()}` : null}
        </div>
        
        {showSubmitPlaydate ? 
          <button
            className='p-1 m-1 dark:bg-slate-500 transform motion-safe:hover:scale-110 sm:hover:bg-green-500 w-1/2' 
            onClick={handlePlaydateSubmit}
          >Yes</button>: null}

        {showSubmitPlaydate ?
          <button 
            className='p-1 m-1 dark:bg-slate-500 transform motion-safe:hover:scale-110 sm:hover:bg-red-500 w-1/2' 
            onClick={handleSubmitNo}
          >No</button>: null}

      </div>
    </div>
  )

};

export default PlayDateTimes;