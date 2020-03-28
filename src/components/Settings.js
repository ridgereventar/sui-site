import React, { Component, useContext } from 'react';
import Select from 'react-select';

import '../styles/create/Settings.css';

import SectionLabel from './SectionLabel';
import FontInput from './FontInput';
import ColorInput from './ColorInput';
import ColorInputAdd from './ColorInputAdd';

import ColorContext from '../contexts/ColorContext';
import FontContext from '../contexts/FontContext';
import withContext from '../helpers/withContext';

import settingIcon from '../images/settingsicon.png';
import { DEFAULT_FONTS, customStyles } from '../helpers/constants';

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
å
    render() {

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
                                key={index}
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
                                key={index}
                                font={font}
                                index={index}
                                fontOptions={Object.values(DEFAULT_FONTS)}
                                updateFont={this.updateFont}/>         
                        );
                    })}
                    <div onClick={this.addFont} className="font-add-btn">
                        <h3 className="font-add-btn-icon">+</h3>
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

