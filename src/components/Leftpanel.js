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

                <label className="settingsLabel"> Colors</label>

                {this.props.colors.map((color, index) => {
                    return (
                        <React.Fragment>
                            <div className="color-input-container">
                                <div className="color-input-circle"></div>
                                <label class="color-type-label">{color.type}</label>
                                <input className="hexCodeInput" 
                                    type="text" 
                                    value={color.hex} 
                                    onChange={this.props.onChangeHex(index)}
                                />
                                <button id="colorwheel-btn"></button>
                            </div>
                            {/* <button onClick={this.onChangeHex.bind(this)}>Update</button> */}
                        </React.Fragment>

                    )
                })}

                <div className="color-input-container extra-color-input">
                    <div className="color-input-circle"></div>
                    <label className="color-type-label">Extra</label>
                    <input className="hexCodeInput" 
                        type="text"
                        value={this.state.newValue}
                        onChange={this.onChangeAddHex}
                    />
                    <button id="colorwheel-btn"></button>
                    <button className="add-btn" onClick={this.props.addHex(this.state.newValue)}>Add</button>
                </div>
                
                <label className="settingsLabel"> Fonts</label>

                <select className="font-dropdown" onChange={this.onFontChange} name="defaultFonts">
                    <option value="Red Hat Display">Red Hat Display</option>
                    <option value="Alata">Alata</option>
                    <option value="Montserrat">Montserrat</option>
                </select>
            </div>
        );
    }
}

export default Leftpanel;