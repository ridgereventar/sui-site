import React, { Component, useContext } from 'react';

import '../styles/Settings.css';

import SectionLabel from './SectionLabel';
import FontInput from './FontInput';
import ColorInput from './ColorInput';
import ColorInputAdd from './ColorInputAdd';

import ColorContext from '../contexts/ColorContext';
import FontContext from '../contexts/FontContext';

import themeIcon from '../images/themeicon.png';
import { DEFAULT_FONTS } from '../helpers/constants';

const Settings = (props) => {

    const {colors, addColor, updateColor} = useContext(ColorContext);
    const {fonts, addFont, updateFont} = useContext(FontContext);

    // The following functions are in charge of communicating the front end user inputs to the contexts. 
    // Each is passed to either ColorInput, ColorInputAdd, or FontInput to obtain the updated value on user input.
    // This value (and index) are then passed to the corresponding method from either ColorContext or FontContext.

    const addHex = (value) => {
        return (e) => {
            addColor("Extra", value); 
        }
    }

    const onChangeHex = (index) => {
        return (e) => {
            const value = e.target.value;
            updateColor(index, value);
        }
    }

    const onColorPicked = (index, value) => {
        updateColor(index, value);
    }

    const onUpdateFont = (index) => {
        return (font) => {
            updateFont(index, font);
        }
    }
    
    const onAddFont = () => {
        addFont();
    }

    return (
        <div className="settings-container">
            <SectionLabel
                url={themeIcon}
                label="Theme Values"/>

            <div className="settings-panel color-panel">
                <h1 className="setting-label"> Colors</h1>

                {/* For each item in the color object, render a ColorInput component, then a ColorInputAdd component */}
                {colors.map((color, index) => {
                    return (
                        <ColorInput 
                            key={index}
                            hex={color.hex}
                            type={color.type}
                            index={index}
                            onChangeHex={onChangeHex}
                            onColorPicked={onColorPicked}/>
                    )
                })}
                <ColorInputAdd
                    addHex={addHex}/>
            </div>  

            <div className="settings-panel font-panel">
                <h1 className="setting-label"> Fonts </h1>

                {/* For each item in the font object, render a FontInput component */}
                {fonts.map((font, index) => {
                    return (
                        <FontInput
                            key={index}
                            font={font}
                            index={index}
                            fontOptions={Object.values(DEFAULT_FONTS)}
                            updateFont={onUpdateFont}/>         
                    );
                })}
                <div onClick={onAddFont} className="font-add-btn">
                    <h3 className="font-add-btn-icon">+</h3>
                </div>
            </div>   
            
        </div>
    )   
}

export default Settings; 

