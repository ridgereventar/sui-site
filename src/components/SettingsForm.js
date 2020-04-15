import React, {Component} from 'react';
import '../styles/Form.css';

import ThemeContext from '../contexts/ThemeContext';

import withContext from '../helpers/withContext'; // a helper designed to consume a context
import { compose } from 'recompose';              // a function that allows multiple wrappers (need to wrap Settings form with both 'withRouter' and 'ThemeContext') 
import { withRouter } from 'react-router-dom';

const axios = require('axios').default;

class SettingsForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            themeName: this.props.themeName,
            privacy: this.props.privacy,
            selectedFile: null,
            filename: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // if no selected file, only update themeName and privacy
        if(this.state.selectedFile === null) {
            
            // Uses updateThemeAttr method from ThemeContext.js
            this.props.updateThemeAttr({
                themeName: this.state.themeName,
                privacy: this.state.privacy
            });

            // calls closeModal method using onSubmit prop from Create.js
            this.props.onSubmit();

        } else { // else update all

            // Appends file to FormData and sent through axios post to be stored in database via Multer and GridFS (backend)
            var data = new FormData();
            data.append('file', this.state.selectedFile);
            axios.post('/upload', data, {}).then(res => {
                // once the file upload to database is successfull, update remainting theme attributes (including new image id).
                this.props.updateThemeAttr({
                    themeName: this.state.themeName,
                    privacy: this.state.privacy,
                    imageId: res.data.id});
    
                this.props.onSubmit();
            })
        }
    }

    // onChange listener for file input
    handleFileChanges = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            filename: event.target.files[0].name
        });
    }

    // onChange listener that updates state values on form input.
    handleChange = (e) => {
        const{name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <React.Fragment>
                <form className="settings-form" onSubmit={this.handleSubmit}>
                    <label className="form-label" htmlFor="themeName">Theme Name</label>
                    <input
                        className="form-input"
                        type="text"
                        id="themeName"
                        placeholder={this.props.themeName}
                        name="themeName"
                        onChange={this.handleChange}
                        />

                    <span className="form-label privacy-label">Privacy: </span>
                    <input
                        type="radio"
                        id="public"
                        name="privacy"
                        value="public"
                        onChange={this.handleChange}
                        />
                    <label className="radio-label" htmlFor="public">Public</label>
                    <br></br>
                    <input
                        type="radio"
                        id="private"
                        name="privacy"
                        value="private"
                        onChange={this.handleChange}
                        />
                    <label className="radio-label" htmlFor="private">Private</label>
                    <br></br>
                    
                    <span className="form-label choose-label">Upload UI Thumbnail</span>
                    
                    <div className="choose-container">
                        <label className="form-label choose-btn"  htmlFor="file">Browse</label>
                        <input 
                            className="choose-file-input"
                            style={{display: 'block'}}
                            type="file"
                            name="file"
                            id="file"
                            onChange={this.handleFileChanges}
                            />
                        {this.state.filename ? <span className="filename-container">{this.state.filename}</span> : ""}
                    </div>
                    <input className="form-btn" id="settings-submit-btn" type="submit" value="Apply"/>
                </form>
            </React.Fragment>
        );
    }
}


export default compose(
    withRouter,
    withContext(
        {
            context: ThemeContext,
            mapValueToProps: (value) =>  ({ theme_id: value._id,
                                        themeName: value.themeName, 
                                        privacy: value.privacy, 
                                        imageId: value.imageId,
                                        updateThemeAttr: value.updateThemeAttr})
        }
    )
)(SettingsForm);  