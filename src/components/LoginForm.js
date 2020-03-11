import React, {Component} from 'react'; 
import '../styles/landing/Form.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }
    
    handleChange = (e) => {
        console.log("change");
    }

    render() {
        return (
            <div className="login-form-container">
                <div className="login-contents-container">
                    <span className="form-header">Log in to S<span className="blue-font">Ui</span> </span>
                    <form className="login-form">
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
                        
                        <input className="form-btn" id="form-login-btn" type="submit" value="Login"/>
                        <input className="form-btn" id="form-signup-btn" type="button" value="Sign up"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;