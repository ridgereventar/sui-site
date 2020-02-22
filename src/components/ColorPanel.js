import React, { Component, useContext } from 'react';
import $ from 'jquery';
import '../styles/Create.css';
import {StyleContext} from '../App';

class ColorPanel extends Component {

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
            <div className="settings-panel-container">

                <h1> Colors</h1>

                {this.props.colors.map((color, index) => {
                    return (
                        <React.Fragment>
                            <div className="color-input-container">
                                <div className="color-input-circle" style={{backgroundColor: color.hex}}></div>
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
                
                
            </div>
        );
    }
}

export default ColorPanel;