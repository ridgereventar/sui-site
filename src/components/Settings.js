import React, { Component, useContext } from 'react';
import $ from 'jquery';
import '../styles/create/Settings.css';

import {StyleContext} from '../App';

import SectionLabel from './SectionLabel';
import ColorInput from './ColorInput';
import ColorInputAdd from './ColorInputAdd';
import FontInput from './FontInput';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import settingIcon from '../images/settingsicon.png';
import withContext from '../helpers/withContext';
import ColorContext, { ColorContextConsumer } from '../contexts/ColorContext';
import FontContext, { FontContextConsumer } from '../contexts/FontContext';

class Settings extends Component {

    constructor(props) {
        super(props);
    }

    addHex = (value) => {
        return (e) => {
            this.props.addColor("Extra", value);
        }
    }

    onChangeHex = (index) => {
        return (e) => {
            const value = e.target.value;
            this.props.updateColor(index, value);
        }
    }

    onColorPicked = (index, value) => {
        this.props.updateColor(index, value);
    }

    updateFont = (index) => {
        return (font) => {
            this.props.updateFont(index, font);
        }
    }
    
    addFont = () => {
        this.props.addFont();
    }


    render() {

        const typographyOptions = [];
        const animatedComp = makeAnimated();

        {this.props.fonts.map(font => {
            typographyOptions.push({value: font.name, label: font.name});
        })}

        return (
            <div className="settings-container">
                <SectionLabel
                    url={settingIcon}
                    label="Settings"/>

                <div className="settings-panel color-panel">
                    <h1 className="setting-label"> Colors</h1>
                    {this.props.colors.map((color, index) => {
                        return (
                            <ColorInput 
                                hex={color.hex}
                                type={color.type}
                                index={index}
                                onChangeHex={this.onChangeHex}
                                onColorPicked={this.onColorPicked}/>
                        )
                    })}
                    <ColorInputAdd
                        addHex={this.addHex}/>
                </div>  

                <div className="settings-panel font-panel">
                    <h1 className="setting-label"> Fonts </h1>
                    {this.props.fonts.map((font, index) => {
                        return (
                            <FontInput
                                font={font}
                                index={index}
                                fontOptions={this.props.fontOptions}
                                updateFont={this.updateFont}/>         
                        );
                    })}
                    <div onClick={this.addFont} className="font-add-btn">
                        <h3 className="font-add-btn-icon">+</h3>
                    </div>
                </div>
            
                <div className="settings-panel typography-panel">
                    <h1 className="setting-label">Typography</h1>
                    
                    <div className="font-input-container">
                        <div className="font-input-icon-container">
                            <h1>H1</h1>
                        </div>
                        <div className="font-select-container">
                            <Select options={typographyOptions}/> 
                        </div>
                    </div>
                    
                    <div className="font-input-container">
                        <div className="font-input-icon-container">
                            <h2>H2</h2>
                        </div>
                        <div className="font-select-container">
                            <Select options={typographyOptions}/> 
                        </div>
                    </div>

                    <div className="font-input-container">
                        <div className="font-input-icon-container">
                            <h3>H3</h3>
                        </div>
                        <div className="font-select-container">
                            <Select options={typographyOptions}/> 
                        </div>
                    </div>

                    <div className="font-input-container">
                        <div className="font-input-icon-container">
                            <h4>H4</h4>
                        </div>
                        <div className="font-select-container">
                            <Select options={typographyOptions}/> 
                        </div>
                    </div>

                    <div className="font-input-container">
                        <div className="font-input-icon-container">
                            <h5>H5</h5>
                        </div>
                        <div className="font-select-container">
                            <Select options={typographyOptions}/> 
                        </div>
                    </div>

                    <div className="font-input-container">
                        <div className="font-input-icon-container">
                            <p>Body</p>
                        </div>
                        <div className="font-select-container">
                            <Select options={typographyOptions}/> 
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}


export default withContext(
    {
        context: ColorContext,
        mapValueToProps: (value) =>  ({colors: value.colors, addColor: value.addColor, updateColor: value.updateColor})
    },
    {
        context: FontContext,
        mapValueToProps: (value) =>  ({fonts: value.fonts, addFont: value.addFont, updateFont: value.updateFont})
    }
)(Settings); 

