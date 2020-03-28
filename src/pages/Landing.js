import React, { Component } from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import '../styles/Landing.css';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import WelcomeMsg from '../components/WelcomeMsg';

import Fade from 'react-reveal/Fade';
import withContext from '../helpers/withContext';
import UserContext from '../contexts/UserContext';

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

    handleLoginClick = () => {
      this.props.history.push('/landing/login', {signupShown: this.state.signupDisplayed});
    }

    render() {

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
                        <span className="nav-link" onClick={this.handleLoginClick}>
                          Log in
                        </span>
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
                      <Route path="/landing/login" exact component={(props) => <LoginForm login={this.props.login} 
                                                                                          name={this.props.name}
                                                                                          email={this.props.email}
                                                                                          signup={this.state.signupDisplayed}/>} />
                      <Route path="/landing/signup" exact component={(props) => <SignupForm signup={this.props.signup}/>}/>
                    </Switch>
            
                  </div>
                  <div className="welcome-anim-container">
                    <div className="graphic"></div>
                  </div>
                </div>

              </div>

              <div className="intro-container">
                <Fade right>
                  <div className="intro-slideout">

                  </div>
                </Fade>

              </div>
   
              



            </React.Fragment>
        );
    }
}

export default withContext(
  {
    context: UserContext,
    mapValueToProps: (value) => ({name: value.name, email: value.email, login: value.login, signup: value.signup})
  }
)(Landing);