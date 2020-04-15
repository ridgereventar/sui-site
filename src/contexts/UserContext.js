import React from 'react'; 
import {withRouter} from 'react-router-dom';

const axios = require('axios').default;

const UserContext = React.createContext(); 
export const UserContextConsumer = UserContext.Consumer; 

class UserContextProviderClass extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            isAuthorized: false,
            _id: "",
            name: "",
            email: "",
            themes: []
        }
    }

    // when the UserContext mounts it checks localStorage if user id is stored.
    componentDidMount() {
        if(localStorage.getItem("userId") !== null) {
            // If a user id is found, it calls a get request to save the instance of this user in the UserContext's state.
            axios.get(`/api/user/${localStorage.getItem("userId")}`).then((user) => {
                this.setState({
                    _id: user.data._id, 
                    name: user.data.name, 
                    email: user.data.email, 
                    themes: user.data.themes
                });
            })
        }
    }

    // login method gets passed to LoginForm.js from Landing.js to handle a login request. 
    login = (email, password) => {
        return axios.get('/api/users').then((response) => {
            let founduser = response.data.find(user => user.email === email && user.password === password);
            // If found user equals null, then no user was found and I return a promise reject.
            if(founduser == null) {
                console.log("...not found");
                return Promise.reject("ERROR: User not found");
            } else {
                // Else, the user is found. I then update the UserContext state, store the id in localStorage, and return a promise resolve.
                this.setState({
                    _id: founduser._id,
                    name: founduser.name, 
                    emal: founduser.email, 
                    themes: founduser.themes
                });
                localStorage.setItem('userId', founduser._id);
                return Promise.resolve("SUCCESS: User found, logged in.");
            }
        })
    }

    // signup method gets passed to SignupForm.js from Landing.js to handle a signup request given the input from the form.
    signup = (userName, userEmail, userPassword) => {
        const newUser = {
            name: userName,
            email: userEmail,
            password: userPassword,
            themes: [] 
        }
        // I return an axios post request to obtain either a promise resolve or reject. 
        return axios.post('/api/users', newUser).then((response) => {

            // After the post was successfull, I find the user to set its Id in the localStorage.
            axios.get('/api/users').then((response) => {
                let founduser = response.data.find(user => user.email === userEmail && user.password === userPassword);
                if(founduser == null) {
                    console.log("...not found");
                    return Promise.reject("ERROR: User added was not found");
                } else {
                    this.setState({
                        _id: founduser._id,
                        name: founduser.name, 
                        emal: founduser.email, 
                        themes: founduser.themes
                    });
                    localStorage.setItem('userId', founduser._id);
                }
            })
            return Promise.resolve("SUCCESS: User added to SUI-DB"); 
        }).catch((error) => {
            return Promise.reject(error);
        })
    }

    render() {
        return (
            <UserContext.Provider value={{
                _id: this.state._id,
                name: this.state.name, 
                email: this.state.email,
                themes: this.state.themes,
                login: this.login,
                signup: this.signup
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export const UserContextProvider = withRouter(UserContextProviderClass);
export default UserContext; 