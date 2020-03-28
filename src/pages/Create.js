import React, { Component, useContext } from 'react';
import '../styles/create/Create.css';

import Settings from '../components/Settings';
import Styleguide from '../components/Styleguide';
import UiComp from '../components/UiComp';

import ThemeContext, {ThemeContextProvider} from '../contexts/ThemeContext';
import {FontContextProvider} from '../contexts/FontContext';
import {ColorContextProvider} from '../contexts/ColorContext';

const Create = () => {
    const theme = useContext(ThemeContext);
    return (
        <div className="create-container">
            <div className="create-header">
                <div className="create-header-icon"></div>
                <h3 style={{color: 'white', display: 'inline'}}>{theme.themeName}</h3>
                <button onClick={theme.saveTheme}>Save</button>
            </div>

            <div className="playground-window">
                <Settings/>
                <Styleguide/>
                <UiComp/>
            </div>
        </div>
    );
}

const CeateContainer = (props) => {
    return (
        <ThemeContextProvider>
            <FontContextProvider>
                <ColorContextProvider>
                    <Create/>
                </ColorContextProvider>
            </FontContextProvider>
        </ThemeContextProvider>
    )
}

export default CeateContainer;
  