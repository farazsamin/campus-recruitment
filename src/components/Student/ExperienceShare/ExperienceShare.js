import React, { useState } from 'react';
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
const ExperienceShare = () => {
    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [location, setLocation] = useState('')
    const [from, setFrom] = useState()
    const [to, setTo] = useState()
    const [description, setDescription] = useState('')

    const handleAddToYourExperience = (e) => {
        SetToken(localStorage.getItem('userToken'));
        e.preventDefault();
      
        // fd.append('title', title);
        // fd.append('company', company);
        // fd.append('location', location);
        // fd.append('from', from);
        // fd.append('to', to);
        // fd.append('description', description);
        // setTitle('');
        // setCompany('')
        // setLocation('')
        // setFrom('')
        // setTo('')
        // setDescription('')
        

        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me/experience',{
            title : title,
            company : company,
            location : location,
            from : from,
            to : to,
            description : description
        })
            .then(res => {
                console.log(res)
              
            })
            .catch(err => {
                console.log(err.response.data.err)
            })
    }

    return (
        <div className="edit-resume ">
            <h1>Add Your Experience</h1>
            <label htmlFor="">Title</label>
            <input type="text" name="" id="" value={title} onChange={
                (event) => {
                    setTitle(event.target.value);
                }
            } />
            <label htmlFor="">Company</label>
            <input type="text" name="" id="" value={company} onChange={
                (event) => {
                    setCompany(event.target.value);
                }
            } />
            <label htmlFor="">Location</label>
            <input type="text" name="" id="" value={location} onChange={
                (event) => {
                    setLocation(event.target.value);
                }
            } />
            <label htmlFor="">From</label>
            <input type="date" name="" id="" value={from} onChange={
                (event) => {
                    console.log(event.target.value)
                    setFrom(event.target.value);
                }
            } />
            <label htmlFor="">To</label>
            <input type="date" name="" id="" value={to} onChange={
                (event) => {
                    setTo(event.target.value);
                }
            } />
            <label htmlFor="">Description</label>
            <input type="text" name="" id="" value={description} onChange={
                (event) => {
                    setDescription(event.target.value);
                }
            } />
            
            <button className="btn btn-success mt-3" onClick={handleAddToYourExperience}>Add To Your Experience</button>
        </div>
    );
};

export default ExperienceShare;