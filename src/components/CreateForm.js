import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../styles/Form.css';

import cx from 'classnames';
import Axios from 'axios';

class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        // Axios.post('/url', {
        //     headers: {
        //         'sui-user': this.props.user.userId
        //     }
        // })
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
                    />
                
                <input
                    className=""
                    type="radio"
                    id="public"
                    name="privacy"
                    value="public"
                    />
                <label className="form-label" htmlFor="public">Public</label>
                <br/>

                <input
                    className=""
                    type="radio"
                    id="private"
                    name="privacy"
                    value="private"
                    />
                <label className="form-label" htmlFor="private">Public</label>
                <br/>

                
                <input type="submit" value="Submit"/>
            </form>
        
        );
    }
}

export default withRouter(CreateForm);