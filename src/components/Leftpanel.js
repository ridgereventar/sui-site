import React, { Component, useContext } from 'react';
import $ from 'jquery';
import '../App.css';

class Leftpanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: props.defaultHex,
            newHexValue: ""
        };
    }

    onChangeHex = () => {
        this.props.onChangeHex(this.state.color);
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

    onFontChange(event) {
        console.log(event.target.value);
        $(".headerFont").css("font-family", `"${event.target.value}", sans-serif`);
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
                            {/* <button onClick={this.onChangeHex.bind(this)}>Update</button> */}
                        </React.Fragment>

                    )
                })}

                <input id="addHexInput" 
                    type="text" 
                    value={this.state.newHexValue} 
                    onChange={(event) => this.setState({newHexValue: event.target.value})}
                />
                <button onClick={this.addHex}>Add</button>

                <select onChange={this.onFontChange} name="defaultFonts">
                    <option value="Red Hat Display">Red Hat Display</option>
                    <option value="Alata">Alata</option>
                    <option value="Montserrat">Montserrat</option>
                </select>
            </div>
        );
    }
}

export default Leftpanel;