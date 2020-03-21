import React from 'react'; 

const UserContext = React.createContext(); 
const axios = require('axios').default;

export const UserContextConsumer = UserContext.Consumer; 

export class UserContextProvider extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            name: "",
            email: ""
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

    render() {
        return (
            <UserContext.Provider value={{
                name: this.state.name, 
                email: this.state.email,
                login: this.login
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserContext; 