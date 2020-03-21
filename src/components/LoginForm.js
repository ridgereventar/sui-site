import React, {Component} from 'react'; 
import '../styles/Form.css';
import $ from 'jquery';

import cx from 'classnames';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            const user = {
                email: this.state.email,
                password: this.state.password
            }

            this.props.login(this.state.email, this.state.password).then(() => {
                // redirect
                console.log("redirecting...");
            }).catch((error) => {
                console.log(error);
            })

        } else {
            console.log("Error: Form is not valid");
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
                formErrors.email = emailRegex.test(value) && value.length > 0 ? '' : 'invalid email address';
                break; 
            case 'password':
                formErrors.password = value.length < 6 ? 'minimum 6 characters': '';
                break;
            default:
                break;
        }

        // Assigns each field to the state 
        this.setState({formErrors, [name]: value}, () => console.log(this.state));
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
                    <form className="login-form fade-in" onSubmit={this.handleSubmit}>
                        <label className="form-label" htmlFor="email">Email Address</label>
                        <input
                            className="form-input"
                            type="text"
                            id="email"
                            placeholder="example@email.com"
                            name="email"
                            onChange={this.handleChange}/>
                        {this.state.formErrors.email.length > 0 && (
                            <span>{this.state.formErrors.email}</span>
                        )}
                        <label className="form-label">Password</label>
                        <input
                            className="form-input"
                            type="password"
                            id="password"
                            placeholder="enter your password"
                            name="password"
                            autoComplete="off"
                            onChange={this.handleChange}/>
                        {this.state.formErrors.password.length > 0 && (
                            <span>{this.state.formErrors.password}</span>
                        )}
                        <input className="form-btn" id="form-login-btn" type="submit" value="Login"/>
                        <input className="form-btn" id="form-signup-btn" type="button" value="Sign up"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;