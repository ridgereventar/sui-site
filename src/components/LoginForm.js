import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import '../styles/Form.css';

import cx from 'classnames';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formInvalid: false,
            userNotFound: false,
            emailFocused: false,
            passwordFocused: false,
            email: null,
            password: null,
            formErrors: {
                email: "", 
                password: ""
            }
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault();

        // As long as formValid returns true, the form is ok to submit
        if(this.formValid(this.state)) {
            this.setState({formInvalid: false}); // resets formInvalid to false
            
            // Calls login method from UserContext.js then redirect to home page if successfull.
            this.props.login(this.state.email, this.state.password).then(() => {
                this.props.history.push('/home');                
            }).catch((error) => {
                // if unsuccessfull, set userNotFound to true, to display error msg.
                this.setState({userNotFound: true});
            })
        } else {
            console.log("Error: Form is not valid");
            this.setState({formInvalid: true}); // sets formInvalid to true to display error msg.
        }
    }

    formValid = ({formErrors, ...rest}) => {
        // if formErrors empty and state values !=null, form is valid 
        let valid = true; 
        Object.values(formErrors).forEach(val => {
            if(val.length > 0) {
                valid = false;
            }
        });
        Object.values(rest).forEach(val => {
            if(val == null) {
                valid = false;
            }
        })
        return valid;
    }

    handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target; 
        let formErrors = this.state.formErrors; 

        // Form Validation 
        switch(name) {
            case 'email':
                const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
                formErrors.email = emailRegex.test(value) && value.length > 0 ? '' : '(Invalid email)';
                break; 
            case 'password':
                formErrors.password = value.length < 6 ? '(Minimum 6 characters)': '';
                break;
            default:
                break;
        }

        // Updates the email, password, and formErrors (if any were found) in state
        this.setState({formErrors, [name]: value});
    }

    // Sets the email and password focus states to true/false
    onFocus = (event) => {
        const {name, value} = event.target;
        switch(name) {
            case 'email':
                this.setState({emailFocused: true});
                break; 
            case 'password':
                this.setState({passwordFocused: true});
                break;
        }
    }

    onBlur = (event) => {
        const {name, value} = event.target;
        switch(name) {
            case 'email':
                this.setState({emailFocused: false});
                break; 
            case 'password':
                this.setState({passwordFocused: false});
                break;
        }
    }

    // Redirect to signup route
    handleSignupClick = () => {
        this.props.history.push('/signup');
    }

    render() {

        return (
            <div className={cx(
                    "login-form-container",
                    {
                        ["fade-in"]: !this.props.signup,
                        ["height-shrink"]: this.props.signup
                    } 
                )}>
                <div className="login-contents-container">
                    <span className="form-header fade-in">Log in to S<span className="blue-font">Ui</span> </span>
                    
                    {/* Dynamically display error msgs if form is invalid state is true */}
                    {this.state.formInvalid && (
                        <div className="login-error-msg-container">
                            <span className="login-error-msg">Please check email and password and try again.</span>
                        </div>
                    )}

                    {/* Dynamically display error msgs if user not found state is true */}
                    {!this.state.formInvalid && this.state.userNotFound && (
                        <div className="login-error-msg-container">
                            <span className="login-error-msg">User not found. Please re-enter and try again.</span>
                        </div>
                    )}
                    
                    <form className="login-form fade-in" onSubmit={this.handleSubmit}>
                        <label className="form-label" htmlFor="email">Email Address</label>

                        {/* Only when user clicks off the email input field and it contains a form error, display error msg  */}
                        {!this.state.emailFocused && this.state.formErrors.email.length > 0 && (
                            <span className="input-error-msg">{this.state.formErrors.email}</span>
                        )}

                        <input
                            className="form-input"
                            type="text"
                            id="email"
                            placeholder="example@email.com"
                            name="email"
                            onChange={this.handleChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}/>
                        
                        <label className="form-label">Password</label>

                        {/* Only when user clicks off the password input field and it contains a form error, display error msg  */}
                        {!this.state.passwordFocused && this.state.formErrors.password.length > 0 && (
                            <span className="input-error-msg">{this.state.formErrors.password}</span>
                        )}
                        
                        <input
                            className="form-input"
                            type="password"
                            id="password"
                            placeholder="enter your password"
                            name="password"
                            autoComplete="off"
                            onChange={this.handleChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}/>
                        
                        <input className="form-btn" id="form-login-btn" type="submit" value="Login"/>
                        <input className="form-btn" id="form-signup-btn" type="button" value="Sign up" onClick={this.handleSignupClick}/>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);