import React, {Component} from 'react'; 
import '../styles/landing/Form.css';

class SignupForm extends Component {
    constructor(props) {
        super(props);
    }
    
    handleChange = (e) => {
        console.log("change");
    }

    render() {
        return (
            <div className="signup-form-container height-transition">
                <div className="login-contents-container">
                    <span className="form-header fade-in">Sign up for S<span className="blue-font">Ui</span> </span>
                    <form className="login-form fade-in">
                        <label className="form-label">Full name</label>
                        <input
                            className="form-input"
                            type="text"
                            id="name"
                            placeholder="John Doe"
                            name="name"
                            onChange={this.handleChange}/>
                        <label className="form-label">Username</label>
                        <input
                            className="form-input"
                            type="text"
                            id="username"
                            placeholder="john.doe"
                            name="username"
                            onChange={this.handleChange}/>
                        <label className="form-label">Email Address</label>
                        <input
                            className="form-input"
                            type="text"
                            id="email"
                            placeholder="example@email.com"
                            name="email"
                            onChange={this.handleChange}/>
                        <label className="form-label">Password</label>
                        <input
                            className="form-input"
                            type="text"
                            id="password"
                            placeholder="enter your password"
                            name="password"
                            autoComplete="off"
                            onChange={this.handleChange}/>
                        <label className="form-label">Confirm Password</label>
                        <input
                            className="form-input"
                            type="text"
                            id="password"
                            placeholder="re-enter your password"
                            name="password"
                            autoComplete="off"
                            onChange={this.handleChange}/>

                        <input className="form-btn" id="form-login-btn" type="submit" value="Sign up"/>
                        <p className="login-msg"> Already have an account? <a id="login-link">Log in</a> </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignupForm;