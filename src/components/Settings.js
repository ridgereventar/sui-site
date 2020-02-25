import React, { Component, useContext } from 'react';
import $ from 'jquery';
import '../styles/Create.css';

import {StyleContext} from '../App';
import ColorInput from './ColorInput';
import ColorInputAdd from './ColorInputAdd';
import SectionLabel from './SectionLabel';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

class Settings extends Component {

    constructor(props) {
        super(props);

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
                    <SectionLabel
                        url={require('../images/settingsicon.png')}
                        label="Settings"/>
                </div>

                <div className="settings-panel color-panel">
                    <h1 className="setting-label"> Colors</h1>

                    {this.props.colors.map((color, index) => {
                        return (
                            <ColorInput 
                                hex={color.hex}
                                type={color.type}
                                index={index}
                                onChangeHex={this.props.onChangeHex}
                                onColorPicked={this.props.onColorPicked}/>
                        )
                    })}

                    <ColorInputAdd
                        addHex={this.props.addHex}/>

                </div>  

                <div className="settings-panel font-panel">
                    <h1 className="setting-label"> Fonts </h1>

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
            
                <div className="settings-panel typography-panel">
                    <h1 className="setting-label">Typography</h1>
                    <div className="input-container">
                        <h1>H1</h1>
                    </div>
                    <div className="input-container">
                        <h2>H2</h2>
                    </div>
                    <div className="input-container">
                        <h3>H3</h3>
                    </div>
                    <div className="input-container">
                        <h4>H4</h4>
                    </div>
                    <div className="input-container">
                        <h5>H5</h5>
                    </div>
                    <div className="input-container">
                        <p>Body</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;


