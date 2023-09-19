import { createContext, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [userId, setUserID] = useState(null);
    const [userFirstName, setFirstName] = useState(null);
    const [userLastName, setLastName] = useState(null);
    const [userContactPhoneNumber, setContactPhoneNumber] = useState(null);
    const [userEmail, setEmail] = useState(null);
    const [userSuburb, setSuburb] = useState(null);
    const [userPostcode, setPostcode] = useState(null);
    const [userDogCat, setDogCat] = useState(null);
    const [userPetName, setPetName] = useState(null);
    const [userPetBreed, setPetBreed] = useState(null);
    const [userPetAge, setPetAge] = useState(null);
    const [userPetGender, setPetGender] = useState(null);
    const [userPhotoURL, setPhotoURL] = useState(null);
    const [user, setUser] = useState(false);
    const [userMap, setUserMap] = useState([]);

    return (
        <UserContext.Provider value={{  
            userId, 
            setUserID,
            userFirstName, 
            setFirstName,
            userLastName, 
            setLastName,
            userContactPhoneNumber, 
            setContactPhoneNumber,
            userEmail, 
            setEmail,
            userSuburb, 
            setSuburb,
            userPostcode, 
            setPostcode,
            userDogCat, 
            setDogCat,
            userPetName, 
            setPetName,
            userPetBreed, 
            setPetBreed,
            userPetAge, 
            setPetAge,
            userPetGender, 
            setPetGender,
            userPhotoURL, 
            setPhotoURL,
            user, 
            setUser,
            userMap,
            setUserMap,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;