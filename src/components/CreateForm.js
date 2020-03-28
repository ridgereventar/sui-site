import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import withContext from '../helpers/withContext';
import {compose} from 'recompose';
import '../styles/Form.css';
import ThemeContext from '../contexts/ThemeContext';
import ColorContext from '../contexts/ColorContext';
import FontContext from '../contexts/FontContext';

const axios = require('axios').default;

const emptyColors = [
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
]

const emptyFonts = [
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

class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            themeName: "",
            creator: this.props.name,
            privacy: "",
            theme: {
                colors:[],
                fonts:[]
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
        axios.post('/api/themes', newTheme, {
            header: {
                ['user-id']: this.props.user.id
            }
        }).then((response) => {            
            // After posting the newTheme to db, add its _id to the logged in user. 
            this.props.history.push('/create?id=${response.id}')
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

export default compose(
    withRouter,
    withContext(
        {
            context: ColorContext,
            mapValueToProps: (value) => ({setColors: value.setColors})
        },
        {
            context: FontContext,
            mapValueToProps: (value) => ({setFonts: value.setFonts})
        },
        {
            context: ThemeContext,
            mapValueToProps: (value) =>  ({theme: value.theme, setTheme: value.setTheme})
        }
    )
)(CreateForm);