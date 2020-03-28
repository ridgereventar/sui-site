import React, {useContext} from 'react';
import Select from 'react-select';
import '../styles/create/UiComp.css'; 

import cx from 'classnames';
import ThemeContext from '../contexts/ThemeContext';
import { customStyles } from '../helpers/constants';

const TypoWindow = (props) => {

    const {theme} = useContext(ThemeContext);
    const {fonts} = theme;

    const typographyOptions = [];
    {fonts.map(font => {
        typographyOptions.push({value: font.name, label: font.name});
    })}

    return (
        <React.Fragment>
            <h1 className="setting-label">Typography</h1>

            <div className="font-input-container">
                <div className="font-input-icon-container">
                    <h1 className="typo-icon">H1</h1>
                </div>
                <div className="font-select-container">
                    <Select styles={customStyles} options={typographyOptions}/> 
                </div>
            </div>

            <div className="font-input-container">
                <div className="font-input-icon-container">
                    <h2 className="typo-icon">H2</h2>
                </div>
                <div className="font-select-container">
                    <Select styles={customStyles} options={typographyOptions}/> 
                </div>
            </div>

            <div className="font-input-container">
                <div className="font-input-icon-container">
                    <h3 className="typo-icon">H3</h3>
                </div>
                <div className="font-select-container">
                    <Select styles={customStyles} options={typographyOptions}/> 
                </div>
            </div>

            <div className="font-input-container">
                <div className="font-input-icon-container">
                    <p className="typo-icon">Body</p>
                </div>
                <div className="font-select-container">
                    <Select styles={customStyles} options={typographyOptions}/> 
                </div>
            </div>
        </React.Fragment>

    )
}

export default TypoWindow;