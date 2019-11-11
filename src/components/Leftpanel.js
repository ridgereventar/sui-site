import React, { Component, useContext } from 'react';
import '../App.css';

class Leftpanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: props.defaultHex,
            arr: [1,2,3],
            newHexValue: ""
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

    addHex = (e) => {
        console.log('add')
        this.props.addHex(this.state.newHexValue)
        this.setState({newHexValue: ""})
    }

    render() {
        return (
            <div id="settings-panel-left" className="settings-panel-container">
                <label id="hexCodeLabel">Enter Hex codes:</label>

                {this.props.colors.map((color, index) => {
                    return (
                        <React.Fragment>
                            <input id="hexCodeInput" 
                                type="text" 
                                value={color.hex} 
                                onChange={this.props.onChangeHex(index)}
                            />
                            <button onClick={this.onChangeHex.bind(this)}>Update</button>
                        </React.Fragment>

                    )
                })}

                <input id="addHexInput" 
                    type="text" 
                    value={this.state.newHexValue} 
                    onChange={(event) => this.setState({newHexValue: event.target.value})}
                />
                <button onClick={this.addHex}>Add</button>
            </div>
        );
    }
}

export default Leftpanel;