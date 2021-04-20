
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import StudentHome from './components/Student/Home/Home';
import AlumniHome from './components/Alumni/Alumni_Home/Alumni_Home';
import CompanyHome from './components/Company/Company_Home/Company_Home'
import AdminHome from './components/Admin/AdminHome/AdminHome'
import AlumniList from './components/Alumni/Alumni_List/Alumni_List'
import Resume from './components/Student/Resume/Resume';
import Login from './components/Login/Login';
import StudentLoginForm from './components/LoginForm/StudentLoginForm';
import AlumniLoginForm from './components/LoginForm/AlumniLoginForm';
import CompanyLoginForm from './components/LoginForm/CompanyLoginForm';
import AdminLoginForm from './components/LoginForm/AdminLoginForm';
import CompanyAbout from './components/Company/Company_About/Company_About';
import AllAlumniesList from './components/Admin/AllAlumniesList/AllAlumniesList'
import AllStudentsList from './components/Admin/AllStudentsList/AllStudentsList';
import AllCompaniesList from './components/Admin/AllCompaniesList/AllCompaniesList';
import StudentRegistration from './components/RegistrationForm/StudentRegistration';
import AdminRegistration from './components/RegistrationForm/AdminRegistration'
function App() {
  return (
    <Router>
    
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route  path="/login/student">
          <StudentLoginForm/>
        </Route>
        <Route  path="/login/alumni">
          <AlumniLoginForm></AlumniLoginForm>
        </Route>
        <Route  path="/login/company">
          <CompanyLoginForm></CompanyLoginForm>
        </Route>
        <Route  path="/login/admin">
         <AdminLoginForm></AdminLoginForm>
        </Route>
        <Route  path="/registration/student">
         <StudentRegistration></StudentRegistration>
        </Route>
        <Route  path="/registration/admin">
         <AdminRegistration></AdminRegistration>
        </Route>
        <Route exact path = "/student_home">
          <StudentHome></StudentHome>
        </Route>
        <Route exact path = "/alumni_home">
          <AlumniHome></AlumniHome>
        </Route>
        <Route exact path = "/alumni_list">
          <AlumniList></AlumniList>
        </Route>
        <Route exact path = "/company_home">
          <CompanyHome></CompanyHome>
        </Route>
        <Route exact path = "/company_about">
         <CompanyAbout></CompanyAbout>
        </Route>
        <Route exact path = "/admin_home">
          <AdminHome></AdminHome>
        </Route>
        <Route exact path = "/all_alumnies_list">
         <AllAlumniesList></AllAlumniesList>
        </Route>
        <Route exact path = "/all_students_list">
         <AllStudentsList></AllStudentsList>
         </Route>
         <Route exact path = "/all_companies_list">
          <AllCompaniesList></AllCompaniesList>
         </Route>


        <Route exact path="/resume">
          <Resume />
        </Route>
        
 
      </Switch>
    </Router>
  )
}

export default App;
