import React, {Component} from 'react';
import '../styles/Form.css';

import {withRouter} from 'react-router-dom';

const axios = require('axios').default;

class CreateForm extends Component {
    constructor(props) {
        super(props);
        // The state holds a template theme, which will be pushed to the database. 
        // Only the creator name is already known, the rest will be user input
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
            },
            themeId: ""
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const newTheme = {
            themeName: this.state.themeName,
            creator: this.state.creator,
            privacy: this.state.privacy,
            theme: this.state.theme,
            imageId: this.state.imageId
        }

        // Sending the newTheme (from state) through an axios post.
        // The server will require the user-id (from the header) to link the user to the new theme created.
        axios.post('/api/themes', newTheme, {
            headers: {
                'user-id': this.props._id
            }
        }).then((response) => {            
            // After posting the newTheme to the database, route to create page with the new theme's _id in the url. 
            this.props.history.push(`/create?id=${response.data._id}`);
        }).catch((error) => {
            console.log(error);
        })
    }

    // onChange handler for each form input. Assigns the value to the state.
    handleChange = (e) => {
        const{name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {

        return (
            <form className="create-form" onSubmit={this.handleSubmit}>
                <label className="form-label" htmlFor="themeName">Theme Name</label>
                <input
                    className="form-input"
                    type="text"
                    id="themeName"
                    placeholder="Brand / Company"
                    name="themeName"
                    onChange={this.handleChange}
                    />

                <span className="form-label">Privacy: </span>
                <br></br>
                <input
                    className=""
                    type="radio"
                    id="public"
                    name="privacy"
                    value="public"
                    onChange={this.handleChange}
                    />
                <label className="radio-label" htmlFor="public">Public</label>
                <br></br>
                <input
                    className=""
                    type="radio"
                    id="private"
                    name="privacy"
                    value="private"
                    onChange={this.handleChange}
                    />
                <label className="radio-label" htmlFor="private">Private</label>
                <br></br>
                
                <input className="form-btn" id="create-submit-btn" type="submit" value="Create"/>
            </form>
        
        );
    }
}

export default withRouter(CreateForm);