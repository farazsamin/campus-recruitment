import React, { useEffect, useState } from 'react';
import './ResumeEdit.css'
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
const ResumeEdit = () => {
    const [name, setName] = useState('')
    const [skills, setSkills] = useState('')
    const [location, setLocation] = useState('')
    const [bio, setBio] = useState('')
    const [status, setStatus] = useState('')
    const [website, setWebsite] = useState('')
    const [githubUserName, setGithubUserName] = useState('')
    const [facebook, setFacebook] = useState('')
    const [instagram, setInstagram] = useState('')
    const handleAddToYourResume = (e) => {
        SetToken(localStorage.getItem('userToken'));
        e.preventDefault();

        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me', {
            company: name,
            skills: skills,
            location: location,
            bio: bio,
            status: status,
            website: website,
            githubUserName: githubUserName,
            facebook: facebook,
            instagram: instagram
        })
            .then(res => {
                console.log(res)
                setName('')
                setSkills('')
                setLocation('')
                setBio('')
                setStatus('')
                setWebsite('')
                setGithubUserName('')
                setFacebook('')
                setInstagram('')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="edit-resume ">
            <h1>Add Your Info</h1>
            <label htmlFor="">Name</label>
            <input type="text" name="" id="" value={name} onChange={
                (event) => {
                    setName(event.target.value);
                }
            } />
            <label htmlFor="">Skills</label>
            <input type="text" name="" id="" value={skills} onChange={
                (event) => {
                    setSkills(event.target.value);
                }
            } />
            <label htmlFor="">Location</label>
            <input type="text" name="" id="" value={location} onChange={
                (event) => {
                    setLocation(event.target.value);
                }
            } />
            <label htmlFor="">Bio</label>
            <input type="text" name="" id="" value={bio} onChange={
                (event) => {
                    setBio(event.target.value);
                }
            } />
            <label htmlFor="">Status</label>
            <input type="text" name="" id="" value={status} onChange={
                (event) => {
                    setStatus(event.target.value);
                }
            } />
            <label htmlFor="">Website</label>
            <input type="text" name="" id="" value={website} onChange={
                (event) => {
                    setWebsite(event.target.value);
                }
            } />
            <label htmlFor="">Github Username</label>
            <input type="text" name="" id="" value={githubUserName} onChange={
                (event) => {
                    setGithubUserName(event.target.value);
                }
            } />
            <label htmlFor="">Facebook</label>
            <input type="text" name="" id="" value={facebook} onChange={
                (event) => {
                    setFacebook(event.target.value);
                }
            } />
            <label htmlFor="">Instagram</label>
            <input type="text" name="" id="" value={instagram} onChange={
                (event) => {
                    setInstagram(event.target.value);
                }
            } />
            <button className="btn btn-success mt-3" onClick={handleAddToYourResume}>Add To Your Resume</button>
        </div>
    );
};

export default ResumeEdit;


// {
//     "company":"To-to", "skills":"web,app", "location":"chottogram", "bio":"wanna be someone big", "status":"student", "website":"https://ahmadmuztaba.github.io/CV/", "githubusername":"AhmadMuztaba",
//             "facebook":"https://www.facebook.com/A.M.AhmadMuztaba/", 
//             "instagram":"https://www.instagram.com/a.m.ahmadmuztaba/"
// }