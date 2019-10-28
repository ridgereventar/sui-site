import React, { Component, useContext } from 'react';
import '../App.css';

class Leftpanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: props.defaultHex
        };
    }

    onChangeHex() {
        this.props.changeHex(this.state.color);
    }

    onHandleInputChange(event) {
        this.setState({
            color: event.target.value
        })
    }

    render() {
        return (
            <div id="settings-panel-left" className="settings-panel-container">
                <label id="hexCodeLabel">Enter Hex codes:</label>
                <input id="hexCodeInput" 
                    type="text" 
                    value={this.state.color} 
                    onChange={(event) => this.onHandleInputChange(event)}
                />

                <button onClick={this.onChangeHex.bind(this)}>Update</button>
            </div>
        );
    }
}

export default Leftpanel;