import React, { Component, useContext } from 'react';
import '../App.css';

class Leftpanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: "#0EC9DF"
        };
    }

    onChangeHex() {
        this.props.changeHex(this.state.color);
    }

    onHandleInputChange(event) {

    }

    render() {
        return (
            <div id="settings-panel-left" className="settings-panel-container">
                <label id="hexCodeLabel">Enter Hex codes:</label>
                <input id="hexCodeInput" 
                    type="text" 
                    value={this.props.defaultHex} 
                    onChange={this.onHandleInputChange}
                />

                <button onClick={this.onChangeHex.bind(this)}>ADD</button>
            </div>
        );
    }
}

export default Leftpanel;