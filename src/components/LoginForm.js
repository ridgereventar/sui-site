import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/Form.css';

import cx from 'classnames';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formInvalid: false,
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
        if(this.formValid(this.state)) {
    
            this.props.login(this.state.email, this.state.password).then(() => {
                this.props.history.push('/home');                
            }).catch((error) => {
                console.log(error);
            })

        } else {
            console.log("Error: Form is not valid");
            this.setState({formInvalid: true});
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

        // Assigns each field to the state 
        this.setState({formErrors, [name]: value}, () => console.log(this.state));
    }

    onEmailFocus = () => {
        this.setState({emailFocused: true});
    }

    onEmailBlur = () => {
        this.setState({emailFocused: false});
    }

    onPwFocus = () => {
        this.setState({passwordFocused: true});
    }

    onPwBlur = () => {
        this.setState({passwordFocused: false});
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
                    
                    {this.state.formInvalid && (
                        <div className="login-error-msg-container">
                            <span className="login-error-msg">Please check email and password and try again.</span>
                        </div>
                    )}
                    
                    <form className="login-form fade-in" onSubmit={this.handleSubmit}>
                        <label className="form-label" htmlFor="email">Email Address</label>
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
                            onFocus={this.onEmailFocus}
                            onBlur={this.onEmailBlur}/>
                        
                        <label className="form-label">Password</label>
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
                            onFocus={this.onPwFocus}
                            onBlur={this.onPwBlur}/>
                        
                        <input className="form-btn" id="form-login-btn" type="submit" value="Login"/>
                        <input className="form-btn" id="form-signup-btn" type="button" value="Sign up"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginForm);