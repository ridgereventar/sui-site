import React, { Component, useContext } from 'react';
import '../App.css';

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

                    <div className="style-guide">
                        <h4>Color Palette</h4>
                        <hr/>
                        <div className="color-palette-container">
                            <div className="color-container" id="color1"></div>
                            <div className="color-container" id="color1"></div>
                            <div className="color-container" id="color1"></div>
                        </div>
            
                        <h4>Typography</h4>
                        <hr/>
                        <h1>Headline Large</h1>
                        <h2>Headline Medium</h2>
                        <h3>Headline</h3>
                        <h5>Body</h5>
                
                    </div>

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