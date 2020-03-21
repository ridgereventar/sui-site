import React, {Component} from 'react'; 
import {withRouter} from 'react-router-dom';
import '../styles/Form.css';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formInvalid: false,
            nameFocused: false,
            emailFocused: false,
            passwordFocused: false, 
            confirmpwFocused: false,
            name: null, 
            email: null, 
            password: null,
            formErrors: {
                name: "",
                email: "",
                password: "",
                confirmpw: ""
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.formValid(this.state)) {
            this.props.signup(this.state.name, this.state.email, this.state.password).then(() => {
                this.props.history.push('/home');
            }).catch((error) => {
                console.log(error);
            })
        } else {
            console.log("Error: Sign up form not valid");
            this.setState({formInvalid: true});
        }
    }
    
    formValid = ({formErrors, ...rest}) => {
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
            case 'name':
                formErrors.name = value.length == 0 ? 'Field is empty' : '';
                break;
            case 'email':
                const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
                formErrors.email = emailRegex.test(value) && value.length > 0 ? '' : 'Invalid email';
                break;
            case 'password':
                formErrors.password = value.length < 6 ? 'Minimum 6 characters': '';
                break;
            case 'confirmpw':
                formErrors.confirmpw = this.state.password != value ? 'Does not match Password': '';
                break;
        }

        this.setState({formErrors, [name]: value}, () => console.log(this.state));
    }

    onFocus = (event) => {
        const {name, value} = event.target;
        switch(name) {
            case 'name': 
                this.setState({nameFocused: true});
                break; 
            case 'email': 
                this.setState({emailFocused: true}); 
                break;
            case 'password': 
                this.setState({passwordFocused: true});
                break;
            case 'confirmpw':
                this.setState({confirmpwFocused: true});
                break;
        }
    }

    onBlur = (event) => {
        const {name, value} = event.target; 
        switch(name) {
            case 'name': 
                this.setState({nameFocused: false});
                break; 
            case 'email': 
                this.setState({emailFocused: false}); 
                break;
            case 'password': 
                this.setState({passwordFocused: false});
                break;
            case 'confirmpw':
                this.setState({confirmpwFocused: false});
                break;
        }
    }

    render() {
        return (
            <div className="signup-form-container height-transition">
                <div className="login-contents-container">
                    <span className="form-header fade-in">Sign up for S<span className="blue-font">Ui</span> </span>

                    {this.state.formInvalid && (
                        <div className="login-error-msg-container">
                            <span className="login-error-msg">Invalid Form. Please correct the following fields:</span>
                        </div>
                    )}                   

                    <form className="login-form fade-in" onSubmit={this.handleSubmit}>
                        <label className="form-label" htmlFor="name">Full name</label>
                        {!this.state.nameFocused && this.state.formErrors.name.length > 0 && (
                            <span className="input-error-msg">{this.state.formErrors.name}</span>
                        )}
                        <input
                            className="form-input"
                            type="text"
                            id="name"
                            placeholder="John Doe"
                            name="name"
                            onChange={this.handleChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}/>
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
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}/>
                        <label className="form-label" htmlFor="password">Password</label>
                        {!this.state.passwordFocused && this.state.formErrors.password.length > 0 && (
                            <span className="input-error-msg">{this.state.formErrors.password}</span>
                        )}
                        <input
                            className="form-input"
                            type="text"
                            id="password"
                            placeholder="enter your password"
                            name="password"
                            autoComplete="off"
                            onChange={this.handleChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}/>
                        <label className="form-label" htmlFor="confirmpw">Confirm Password</label>
                        {!this.state.confirmpwFocused && this.state.formErrors.confirmpw.length > 0 && (
                            <span className="input-error-msg">{this.state.formErrors.confirmpw}</span>
                        )}
                        <input
                            className="form-input"
                            type="text"
                            id="confirmpw"
                            placeholder="re-enter your password"
                            name="confirmpw"
                            autoComplete="off"
                            onChange={this.handleChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}/>

                        <input className="form-btn" id="form-login-btn" type="submit" value="Sign up"/>
                        <p className="login-msg"> Already have an account? <a id="login-link">Log in</a> </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(SignupForm);