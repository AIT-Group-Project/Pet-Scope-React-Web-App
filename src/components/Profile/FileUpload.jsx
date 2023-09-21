import React, { useContext, createRef} from 'react';
import AuthContext from '../../contexts/AuthProvider';
import axios from '../../api/axios';
const PROFILE_URL = '/profile'

const FileUpload = () => {
    const { auth } = useContext(AuthContext);
    const fileInput = createRef();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('myFile', fileInput.current.files[0]);
        console.log('formData', formData);

        try {
            
            const config = {
                headers: {
                    'Authorization': `Bearer ${auth.accessToken}`
                }
            }

            const response = await axios.post(PROFILE_URL, formData, config);
            console.log(response);
            
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }


  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="file" name='avatar' ref={fileInput}/>
            <button type='submit' >upload avatar image</button>
        </form>
    </div>
  )
}

export default FileUpload


