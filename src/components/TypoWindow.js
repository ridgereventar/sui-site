import React, {useContext, useState} from 'react';
import Select from 'react-select';
import '../styles/create/UiComp.css'; 

import cx from 'classnames';
import ThemeContext from '../contexts/ThemeContext';
import { customStyles } from '../helpers/constants';

const TypoWindow = (props) => {

    const {theme} = useContext(ThemeContext);
    const {fonts} = theme;

    const [h1Font, setH1Font] = useState("Avenir Next");
    const [h2Font, setH2Font] = useState("Avenir Next");
    const [h3Font, setH3Font] = useState("Avenir Next");
    const [bodyFont, setBodyFont] = useState("Avenir Next");

    const typographyOptions = [];
    {fonts.map(font => {
        typographyOptions.push({value: font.name, label: font.name});
    })}

    const h1Map = (font) => {
        setH1Font(font.value);
    }

    const h2Map = (font) => {
        setH2Font(font.value);
    }

    const h3Map = (font) => {
        setH3Font(font.value);
    }

    const bodyMap = (font) => {
        setBodyFont(font.value);
    }

    return (
        <div className="typography-window-wrapper">

            <div className="font-input-container">
                <div className="font-input-icon-container">
                    <h1 className="typo-icon">H1</h1>
                </div>
                <div className="font-select-container">
                    <Select styles={customStyles} 
                            options={typographyOptions}
                            onChange={h1Map}/> 
                </div>
            </div>

            <div className="font-input-container">
                <div className="font-input-icon-container">
                    <h2 className="typo-icon">H2</h2>
                </div>
                <div className="font-select-container">
                    <Select styles={customStyles} 
                            options={typographyOptions}
                            onChange={h2Map}/> 
                </div>
            </div>

            <div className="font-input-container">
                <div className="font-input-icon-container">
                    <h3 className="typo-icon">H3</h3>
                </div>
                <div className="font-select-container">
                    <Select styles={customStyles} 
                            options={typographyOptions}
                            onChange={h3Map}/> 
                </div>
            </div>

            <div className="font-input-container">
                <div className="font-input-icon-container">
                    <p className="typo-icon">Body</p>
                </div>
                <div className="font-select-container">
                    <Select styles={customStyles} 
                            options={typographyOptions}
                            onChange={bodyMap}/> 
                </div>
            </div>

            <h1 style={{fontFamily: h1Font}}>Header 1</h1>
            <h2 style={{fontFamily: h2Font}}>Header 2</h2>
            <h3 style={{fontFamily: h3Font}}>Header 3</h3>

            <p className="typo-body" style={{fontFamily: bodyFont}}>Body</p>
            <p className="typo-body" style={{fontFamily: bodyFont}}>Lorem ipsum dolor sit amet, 
            <br/>
            consectetur adipiscing elit. Proin id sem dui. 
            Fusce massa nulla, bibendum vel nisi in, rhoncus viverra lorem.</p>

        </div>


    )
}

export default TypoWindow;