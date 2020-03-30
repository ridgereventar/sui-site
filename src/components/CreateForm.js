import React, {Component} from 'react';
import '../styles/Form.css';

import {withRouter} from 'react-router-dom';

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
        axios.post('/api/themes', newTheme, {
            headers: {
                'user-id': this.props._id
            }
        }).then((response) => {            
            // After posting the newTheme to db, add its _id to the logged in user. 
            this.props.history.push(`/create?id=${response.data._id}`);
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