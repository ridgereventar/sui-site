import React, { Component, useContext } from 'react';
import '../App.css';

import Styleguide from '../components/Styleguide'

class Create extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <React.Fragment>
                <div id="header">
                </div>
      
                <div className="playground-window">
                    <div id="settings-panel-left" className="settings-panel-container">
                        <label id="hexCodeLabel">Enter Hex codes:</label>
                        <input id="hexCodeInput"></input>
                    </div>

                    <Styleguide></Styleguide>

                    <div id="settings-panel-right" className="settings-panel-container">
                    </div>
                </div>
      
                <div id="footer">
                </div>  
            </React.Fragment>
        );
    }
}

export default Create;