import React from 'react'; 
import {withRouter} from 'react-router-dom';
const UserContext = React.createContext(); 
const axios = require('axios').default;

export const UserContextConsumer = UserContext.Consumer; 

class UserContextProviderClass extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            isAuthorized: false,
            name: "",
            email: ""
        }
    }

    componentDidMount() {
        console.log("mounted!");
        if(localStorage.getItem("userId") !== null) {
            axios.get(`/api/user/${localStorage.getItem("userId")}`).then((user) => {
                this.setState({name: user.data.name, email: user.data.email});
                this.props.history.push('/home');                
            })
        }
    }

    login = (email, password) => {
        return axios.get('/api/users').then((response) => {
            console.log(response.data);
            let founduser = response.data.find(user => user.email === email && user.password === password);
            if(founduser == null) {
                console.log("...not found");
                return Promise.reject("ERROR: User not found");
            } else {
                this.setState({name: founduser.name, emal: founduser.email});
                localStorage.setItem('userId', founduser._id);
                return Promise.resolve("SUCCESS: User found, logged in.");
            }
        })
    }

    signup = (userName, userEmail, userPassword) => {
        const newUser = {
            name: userName,
            email: userEmail,
            password: userPassword 
        }
        return axios.post('/api/users', newUser).then((response) => {
            // after posting the new user, find the user to set the localStorage
            axios.get('/api/users').then((response) => {
                let founduser = response.data.find(user => user.email === userEmail && user.password === userPassword);
                if(founduser == null) {
                    console.log("...not found");
                    return Promise.reject("ERROR: User added was not found");
                } else {
                    this.setState({name: founduser.name, emal: founduser.email});
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
                name: this.state.name, 
                email: this.state.email,
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