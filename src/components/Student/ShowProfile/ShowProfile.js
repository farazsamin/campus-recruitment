import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
const ShowProfile = () => {
    const [profileInfo, setProfileInfo] = useState([])
    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me')
        .then(response=>{
            setProfileInfo(response.data)
            console.log(response.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])
    return (
        <div>
            <h1>Hello , I am {profileInfo.company}</h1>
        </div>
    );
};

export default ShowProfile;