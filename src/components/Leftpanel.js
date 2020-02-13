import React, { Component, useContext } from 'react';
import $ from 'jquery';
import '../styles/Create.css';
import {StyleContext} from '../App';
class Leftpanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newValue: ""
        }
    }

    onChangeAddHex = (e) => {
        var test = e.target.value;
        this.setState(state => {
            return {
              ...state,
              newValue: test
            }
        })
        this.props.setPrimary(test);
    }


    onFontChange(event) {
        console.log(event.target.value);
        $(".headerFont").css("font-family", `"${event.target.value}", sans-serif`);
    }

    render() {
        return (
            <div id="settings-panel-left" className="settings-panel-container">
                <label id="hexCodeLabel">Enter Hex codes:</label>
                <br/>

                {this.props.colors.map((color, index) => {
                    return (
                        <React.Fragment>
                            <label class="color-type-label">{color.type}</label>
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
                    value={this.state.newValue}
                    onChange={this.onChangeAddHex}
                />
                <button onClick={this.props.addHex(this.state.newValue)}>Add</button>

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