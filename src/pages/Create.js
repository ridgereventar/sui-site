import React, { Component, useContext } from 'react';
import '../App.css';

import Leftpanel from '../components/Leftpanel';
import Styleguide from '../components/Styleguide';

class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: "#FD4041"
        };
    }
    
    onChangeHex(newHex) {
        this.setState({
            color: newHex
        });
    }

    render() {
        return (
            <React.Fragment>
                <div id="header">
                </div>
      
                <div className="playground-window">
                    <Leftpanel 
                        changeHex={this.onChangeHex.bind(this)}
                        defaultHex={this.state.color}
                    />

                    <Styleguide color={this.state.color}></Styleguide>

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