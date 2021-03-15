
import './App.css';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Resume from './components/Resume/Resume';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    
    <Router>
    
      <Switch>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
 
      </Switch>
    </Router>
  )
}

export default App;
