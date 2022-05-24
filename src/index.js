import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"
import LoginForm from './components/fomes/LoginForm'
import ProfileForm from './components/fomes/ProfileForm'
import SignupForm from './components/fomes/SignupForm'
import { BrowserRouter as Router } from "react-router-dom";
import {Route} from 'react-router-dom'
import Switch from 'react-router-dom'


ReactDOM.render(
      <Router>
    
      <Route exact path = "/" component = {App}/>
      <Route exact path = "/Login" component = {LoginForm}/>
      <Route exact path = "/Profile" component = {ProfileForm}/>
      <Route exact path = "/Signup" component = {SignupForm}/>
  
    </Router>,document.getElementById('root')
  
);
