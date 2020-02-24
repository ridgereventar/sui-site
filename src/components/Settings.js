import React, { Component, useContext } from 'react';
import $ from 'jquery';
import '../styles/Create.css';

import {StyleContext} from '../App';
import ColorInput from './ColorInput';
import {DEFAULT_FONTS} from '../constants';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newValue: "",
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

    onFontChangeHandler = (selectedFonts) => {
        if(selectedFonts == null) {
            const emptyObj = [{}];
            this.props.addFont(emptyObj);
        } else {
            this.props.addFont(selectedFonts);

        }
    }

    render() {

        const {fontOptions} = this.props;

        const options = [];
        const animatedComp = makeAnimated();

        {fontOptions.map((font) => {
            options.push({value: font.id, label: font.title});
        })}

        const customStyles = {
            option: (provided, state) => ({
                ...provided,
                color: 'black',
                "font-family": state.label,
                padding: 5
            })
        }

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

                    <div className="font-select-container">
                        <Select 
                            styles={customStyles}
                            options={options}
                            closeMenuOnSelect={false}
                            components={animatedComp}
                            isMulti
                            onChange={this.onFontChangeHandler}/>
                    </div>


                    

                    {this.props.fonts.map((font) => {

                        return (
                            <div className="input-container">
                                <h3 className="font-input-icon" style={{"font-family": font.label}}>Aa</h3>
                                <text className="selected-font-label" style={{"font-family": font.label}}>{font.label}</text>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Settings;


