import React, { Component, useContext } from 'react';
import $ from 'jquery';
import '../styles/Create.css';

import {StyleContext} from '../App';
import ColorInput from './ColorInput';

class Settings extends Component {

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
        // this.props.setPrimary(test);
    }

    onFontChange(event) {
        console.log(event.target.value);
        $(".headerFont").css("font-family", `"${event.target.value}", sans-serif`);
    }

    render() {
        return (
            <div className="settings-container">
                <div className="settings-header">
                </div>

                <div className="settings-panel">
                    <h1> Colors</h1>

                    {this.props.colors.map((color, index) => {
                        return (
                            <ColorInput 
                                addInput={false}
                                hex={color.hex}
                                type={color.type}
                                index={index}
                                onChangeHex={this.props.onChangeHex}/>
                        )
                    })}

                    <ColorInput
                        addInput={true}
                        type="Extra"
                        newValue={this.state.newValue}
                        onChangeAddHex={this.onChangeAddHex}
                        addHex={this.props.addHex}/>

                </div>  

                <div className="settings-panel">
                    <h1> Fonts </h1>
                        <select className="font-dropdown" onChange={this.onFontChange} name="defaultFonts">
                            <option value="Red Hat Display">Red Hat Display</option>
                            <option value="Alata">Alata</option>
                            <option value="Montserrat">Montserrat</option>
                        </select>
                </div>
            </div>
        );
    }
}

export default Settings;