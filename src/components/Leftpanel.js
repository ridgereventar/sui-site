import React, { Component, useContext } from 'react';
import '../App.css';

class Leftpanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: "#FD4041"
        };
    }

    render() {
        return (
            <div id="settings-panel-left" className="settings-panel-container">
                <label id="hexCodeLabel">Enter Hex codes:</label>
                <input id="hexCodeInput"></input>
                <button onClick={this.onChangeHex}>ADD</button>
            </div>
        );
    }
}

export default Leftpanel;