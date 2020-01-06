import React, { Component, useContext } from 'react';
import '../App.css';

class Login extends Component {

  // constructor(props) {
  //     super(props);
  // }

  render() {
    return (
      <React.Fragment>
            
          <div id="login-container">

            <div id="login-panel-container">  
              <div id="login-panel">

                <div id="logo-container">
                  <div id="logo-img"></div>
                </div>
                
                <div id="form-container">
                  <form>
                    <label className="login-label"> Username </label>
                    <input
                      className="fullwidth-input"
                      type="text"
                      id="username"
                      name="username"
                      />
                    <label className="login-label"> Password </label>
                    <input
                      className="fullwidth-input"
                      type="text"
                      id="password"
                      name="password"
                      />
                    <input id="login-btn" type="submit" value="LOGIN" />
                  </form>
                </div>
              
              </div>
            </div>

            <div id="login-anim-container"></div>

          </div>        

      </React.Fragment>
    );
  }
}

export default Login;