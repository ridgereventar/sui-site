import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import '../styles/Landing.css';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import WelcomeMsg from '../components/WelcomeMsg';

import cx from 'classnames';

class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {
          signupDisplayed: false
        }
    }

    handleSignupClick = () => {
      this.setState({signupDisplayed: true});
    }

    render() {

        console.log(this.state.signupDisplayed);
        return (
            <React.Fragment>
              <div className="landing-container">
                <div className="landing-header">
                  <div className="landing-logo"></div>
                  <div className="landing-nav">
                    <ul className="landing-nav-links">
                      <li>
                        <NavLink className="nav-link" to="/explore">
                          Explore
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="nav-link" to="/landing/login">
                          Log in
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="nav-link" to="/landing/signup">
                          <button id="signupBtn" onClick={this.handleSignupClick}>Sign up</button>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              
                <div className="welcome-container">
                  <div className="welcome-text-container">
                    <Switch>
                      <Route path="/landing" exact component={WelcomeMsg}/>
                      <Route path="/landing/login" exact component={(props) => <LoginForm signup={this.state.signupDisplayed}/>} />
                      <Route path="/landing/signup" exact component={SignupForm}/>
                    </Switch>
            
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