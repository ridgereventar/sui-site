import React, { useState, useContext } from 'react';
import '../styles/Landing.css';

import { Route, NavLink, Switch } from "react-router-dom";          // Handles login & signup routes
import Fade from 'react-reveal/Fade';                               // Library that implements simple reveal animations
import Lottie from 'lottie-web-react';                              // Library to render json as a svg animation
import {animOptions} from '../helpers/constants';                  

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import WelcomeMsg from '../components/WelcomeMsg';

import UserContext from '../contexts/UserContext';

const Landing = (props) => {

    const {name, email, login, signup} = useContext(UserContext);   // Consumes UserContext to pass corresponding values to LoginForm.js
    const [signupDisplayed, setSignupDisplayed] = useState(false);  // A boolean value to track if the signup form has been opened. 
                                                                    // This boolean helps LoginForm.js determine which animation class to attach. 
                                                                    // if false LoginForm will fade in, if true LoginForm will shrink.
  
    const handleSignupClick = () => {
      setSignupDisplayed(true);
    }

    return (
        <React.Fragment>

          <div className="landing-container">

            <div className="landing-header">
              <div className="landing-logo"></div>
              <div className="landing-nav">
                <ul className="landing-nav-links">
                  <li>
                    <NavLink className="nav-link" to="/">Explore</NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/login">Log in</NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/signup">
                      <button id="signupBtn" onClick={handleSignupClick}>Sign up</button>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="welcome-container">
              <div className="welcome-text-container">
                <Switch>
                  <Route path="/" exact component={WelcomeMsg}/>
                  <Route path="/login" exact component={(props) => <LoginForm login={login} name={name} email={email} signup={signupDisplayed} setSignup={handleSignupClick}/>}/>
                  <Route path="/signup" exact component={(props) => <SignupForm signup={signup}/>}/>
                </Switch>
              </div>
              <div id="anim-container" className="welcome-anim-container">
                <Lottie
                  className="sui-lottie"
                  options={animOptions}
                  playingState='play'/>
                <Fade top>
                  <div className="learn-more"/>
                </Fade>
              </div>
            </div>

          </div>

          <div className="intro-container">
            <Fade bottom>
                <h1 className="intro-h1">Branding &#38; Development <br/> Made Easy</h1>
                <p className="develop-p">SUi provides a platform that unifies both the design and development process into one. </p>
            </Fade>
          </div>

          <div className="design-container">
            <Fade bottom>
              <div className="temp-container">
                <div className="design-sample"/>
              </div>
            </Fade>
            <Fade right>
              <div className="design-info-container">
                <div className="title-icon-container">
                  <div className="design-icon"/>
                  <span className="design-text">DESIGN</span>
                </div>
                <p className="design-p">Style Guides are an integral component when <br/> establishing brand identity and consistency.  </p>
              </div>
            </Fade>
          </div>
          
          <div className="develop-container">
            <Fade left>
              <div className="develop-info-container">
                <div className="dev-title-icon-container">
                  <span className="develop-text">DEVELOP</span>
                  <div className="develop-icon"/>
                </div>
                <p className="develop-p">Effortlessly generate customized react components<br/>that are ready to be used in your own projects.</p>
              </div>
            </Fade>
            <Fade bottom>
              <div className="temp-container">
                <div className="develop-sample"/>
              </div>
            </Fade>
          </div>

          <div className="footer"/>

        </React.Fragment>
    )
}

export default Landing;