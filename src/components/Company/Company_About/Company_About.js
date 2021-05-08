import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SetToken } from '../../utilities/setToken';
import CompanyNavbar from '../Navbar/Navbar'
const Company_About = () => {
    const [companyAbout, setCompanyAbout] = useState({})
    useEffect(() => {
        SetToken(localStorage.getItem('userToken'));
        axios.get('https://iiuc-campus-recuitement-system.herokuapp.com/profile/company/me')
            .then(response => {
                console.log(response.data)
                setCompanyAbout(response.data.companyProfile)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (

        <div>

            <CompanyNavbar></CompanyNavbar>

            <div className="row">
                <div className="col-md-3">
                    <Link to="/company/add_info"><button className="btn btn-primary p-2">Add Info</button></Link>
                </div>
                <div className="col-md-9">
                    <h1 className="text-center">About</h1>
                    <h1>{companyAbout.About}</h1>
                    <h1 className="text-center">Mission</h1>
                    <h1>{companyAbout.mission}</h1>
                    <h1 className="text-center">Vission</h1>
                    <h1>{companyAbout.vision}</h1>
                    <h1 className="text-center">Current Employees Number</h1>
                    <h1>{companyAbout.currentEmployeeNumber}</h1>
                    <h1 className="text-center">Website</h1>
                    <h1>{companyAbout.website}</h1>
                    {/* <h1 className="text-center">Facebook</h1>
                    <h1>{companyAbout.social.facebook}</h1>
                    <h1 className="text-center">Instagram</h1>
                    <h1>{companyAbout.social.instagram}</h1>
                    <h1 className="text-center">LinkedIn</h1>
                    <h1>{companyAbout.social.linkedin}</h1>
                    <h1 className="text-center">Twitter</h1>
                    <h1>{companyAbout.social.twitter}</h1>
                    <h1 className="text-center">Youtube</h1>
                    <h1>{companyAbout.social.youtube}</h1> */}

                </div>
            </div>
        </div>
    );
};

export default Company_About;