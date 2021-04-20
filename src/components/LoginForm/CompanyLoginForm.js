import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
const CompanyLoginForm = () => {
    const [companyId, setCompanyId] = useState('')
    const [password, setPassword] = useState('')

    const handleCompanyLogin = () => {
        axios.post('', {
           companyId : companyId,
           password : password
        })
            .then((response) => {
                console.log(response)
            })
        // window.location.reload();
    }
    return (
        <div>
            <div>

                <div className="row mt-5 pt-5">
                    <div className="col-md-3 mx-auto">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Company Id Yours :</label>
                            <input type="text" class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter " onChange={
                            (event) => {
                                setCompanyId(event.target.value);
                            }
                        } />
                            <small id="emailHelp" class="form-text text-muted">Enter right matric id.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={
                            (event) => {
                                setPassword(event.target.value);
                            }
                        } />
                        </div>
                        <Link to="/company_home"><button onClick={handleCompanyLogin} className="btn btn-primary">Log in As company</button></Link>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyLoginForm;