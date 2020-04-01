import React, { Component } from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import '../styles/Landing.css';

import Lottie from 'lottie-web-react';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import WelcomeMsg from '../components/WelcomeMsg';

import Fade from 'react-reveal/Fade';
import withContext from '../helpers/withContext';
import UserContext from '../contexts/UserContext';

let watchAnimationData = require('../helpers/suiAnimFinalv1.json');
const renderer = 'svg';
const rendererSettings = {
  preserveAspectRatio:  'xMinYMin slice',
}

// const defaultOptions = {
//   loop: true, 
//   autoplay: true, 
//   animationData: animationData, 
//   renderSettings: {
//     preserveAspectRatio: 'xMidYMid slice'
//   }
// }

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
                  <div id="anim-container" className="welcome-anim-container">
                    <Lottie
                      className="sui-lottie"
                      options={{
                        renderer: renderer,
                        loop: false,
                        autoplay: true, 
                        assetsPath: '../helpers/images',
                        animationData: watchAnimationData,
                        rendererSettings: rendererSettings
                      }}
                      playingState='play'>

                    </Lottie>
                    <Fade top>
                      <div className="learn-more"></div>
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
                    <div className="design-sample">
                    </div>
                  </div>
                  
                </Fade>

                <Fade right>
                  <div className="design-info-container">
                    <div className="title-icon-container">
                      <div className="design-icon"></div>
                      <span className="design-text">DESIGN</span>
                    </div>
                    <p className="design-p">Style Guides are an integral component when 
                    <br/> establishing brand identity and consistency.  </p>
                  </div>
                </Fade>

              </div>
              
              <div className="develop-container">

                <Fade left>
                  <div className="develop-info-container">
                    <div className="dev-title-icon-container">
                      <span className="develop-text">DEVELOP</span>
                      <div className="develop-icon"></div>
                    </div>
                    <p className="develop-p">Style Guides are an integral component when 
                    <br/> establishing brand identity and consistency.  </p>
                  </div>
                </Fade>


                <Fade bottom>
                  <div className="temp-container">
                    <div className="develop-sample">
                    </div>
                  </div>
                </Fade>

                  

              </div>

              <div className="footer">

              </div>

              {/* <div className="intro-container">
                <Fade right>
                  <div className="intro-slideout">

                  </div>
                </Fade>

              </div> */}
   
              



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