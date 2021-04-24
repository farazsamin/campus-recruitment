import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
const ShowPic = () => {

    const [profilePic, setProfilePic] = useState([])

    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me/profilePic')
        .then(response=>{
            setProfilePic(response.data.pic.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])
    
    let img=new Buffer.from(profilePic).toString('base64');           
    img=`data:image/jpg;base64,${img}`;

    return (
        <div>
           {/* { console.log(img)} */}
            <img src={img} alt=""/>
        </div>
    );
};

export default ShowPic;