import React, { Component, useContext } from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import '../styles/Landing.css';

class Landing extends Component {

    // constructor(props) {
    //     super(props);
    // }


    render() {


        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    }
}

export default Landing;