import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import '../styles/Landing.css';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

class Landing extends Component {

    // constructor(props) {
    //     super(props);
    // }


    render() {


        return (
            <React.Fragment>
              <div className="landing-container">
                <div className="landing-header">
                  <div className="landing-logo"></div>
                  <div className="landing-nav">
                    <ul className="landing-nav-links">
                      <li><NavLink className="nav-link" to="/explore">Explore</NavLink></li>
                      <li><NavLink className="nav-link" to="/login">Log in</NavLink></li>
                      <li>
                        <NavLink className="nav-link" to="/login">
                          <button id="signupBtn">Sign up</button>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              
                <div className="welcome-container">
                  <div className="welcome-text-container">
                    {/* <div className="welcome-box"></div> */}
                    <LoginForm/>
                    {/* <SignupForm/> */}
                  </div>
                  <div className="welcome-anim-container">
                    <div className="graphic"></div>
                  </div>
                </div>

              </div>

              <div className="intro-container">

              </div>



            </React.Fragment>
        );
    }
}

export default Landing;