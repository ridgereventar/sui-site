import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/Form.css';

import cx from 'classnames';

const axios = require('axios').default;

class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            themeName: "",
            creator: this.props.name,
            privacy: "",
            theme: {
                colors: [
                    {
                        type: "Primary", 
                        hex: "", 
                        rgb: "",
                        swatch: []
                    }, 
                    {
                        type: "Secondary", 
                        hex: "", 
                        rgb: "",
                        swatch: []
                    }, 
                    {
                        type: "Tertiary", 
                        hex: "", 
                        rgb: "",
                        swatch: []
                    } 
                ], 
                fonts: [
                    {
                        type: "Primary", 
                        name: "", 
                        url: "",
                        weights: []
                    },
                    {
                        type: "Secondary", 
                        name: "", 
                        url: "",
                        weights: []
                    }
                ]
            }
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const newTheme = {
            themeName: this.state.themeName,
            creator: this.state.creator,
            privacy: this.state.privacy,
            theme: this.state.theme
        }
        axios.post('/api/themes', newTheme).then((response) => {            
            // After posting the newTheme to db, add its _id to the logged in user. 
            axios.put(`/api/user/${localStorage.getItem("userId")}`, {theme: response.data._id}).then((response) => {
                this.props.history.push('/create');
            }).catch((error) => {
                console.log(error);
            })
        }).catch((error) => {
            console.log(error);
        })
    }

    handleChange = (e) => {
        const{name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {

        return (
            <form className="" onSubmit={this.handleSubmit}>
                <label className="form-label" htmlFor="themeName">Theme Name</label>
                <input
                    className="form-input"
                    type="text"
                    id="themeName"
                    placeholder="Brand / Company"
                    name="themeName"
                    onChange={this.handleChange}
                    />
                
                <input
                    className=""
                    type="radio"
                    id="public"
                    name="privacy"
                    value="public"
                    onChange={this.handleChange}
                    />
                <label className="form-label" htmlFor="public">Public</label>
                <br/>

                <input
                    className=""
                    type="radio"
                    id="private"
                    name="privacy"
                    value="private"
                    onChange={this.handleChange}
                    />
                <label className="form-label" htmlFor="private">Private</label>
                <br/>

                
                <input type="submit" value="Submit"/>
            </form>
        
        );
    }
}

export default withRouter(CreateForm);