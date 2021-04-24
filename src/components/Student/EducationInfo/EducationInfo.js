import React, { useState } from 'react';
import axios from 'axios'
import { SetToken } from '../../utilities/setToken';
const EducationInfo = () => {
    const [school, setSchool] = useState('')
    const [college, setCollege] = useState('')
    const [university, setUniversity] = useState('')
    const [fieldOfStudy, setFieldOfStudy] = useState('')
    const [educationInfo, setEducationInfo] = useState([])
    const handleAddToYourEducationalInfo = (e) => {
        SetToken(localStorage.getItem('userToken'));
        e.preventDefault();
     
        axios.post('https://iiuc-campus-recuitement-system.herokuapp.com/profile/me/education', {
            school: school,
            college: college,
            university: university,
            fieldOfStudy: fieldOfStudy
        })
            .then(res => {
                console.log(res)
                setSchool('')
                setCollege('')
                setUniversity('')
                setFieldOfStudy('')

            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="edit-resume ">
            <h1>Add Your Education Info</h1>
            <label htmlFor="">School</label>
            <input type="text" name="" id="" value={school} onChange={
                (event) => {
                    setSchool(event.target.value);
                }
            } />
            <label htmlFor="">College</label>
            <input type="text" name="" id="" value={college} onChange={
                (event) => {
                    setCollege(event.target.value);
                }
            } />
            <label htmlFor="">University</label>
            <input type="text" name="" id="" value={university} onChange={
                (event) => {
                    setUniversity(event.target.value);
                }
            } />
            <label htmlFor="">Field Of Study</label>
            <input type="text" name="" id="" value={fieldOfStudy} onChange={
                (event) => {
                    setFieldOfStudy(event.target.value);
                }
            } />


            <button className="btn btn-success mt-3" onClick={handleAddToYourEducationalInfo}>Add To Your Experience</button>
        </div>
    );
};

export default EducationInfo;