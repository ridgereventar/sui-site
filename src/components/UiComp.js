import React, {Component, useState, useContext} from 'react';
import { Route, NavLink, Switch } from "react-router-dom";

import '../styles/create/UiComp.css'; 

import SectionLabel from './SectionLabel';

import uicompIcon from '../images/uicompicon.png';
import exportIcon from '../images/exporticon.png';
import InputWindow from './InputWindow';
import TypoWindow from './TypoWindow';
import ThemeContext from '../contexts/ThemeContext';

const UiComp = (props) => {

    const [showInputTab, setShowInputTab] = useState(true);
    const {jsonDownload} = useContext(ThemeContext);

    const toggleTab = (choice) => {
        setShowInputTab(choice);
    }

    const handleImgUpload = (event) => {

    }

    return(
        <div className="ui-comp-container">
            <SectionLabel url={uicompIcon} label="Ui Components"/>

            <div className="ui-panel">

                <div className="ui-tab-container">
                    <div id="ui-tab-input-nav" className="ui-tab" onClick={() => toggleTab(true)}>
                        <span className="tab-label">Input / Navigation</span>
                    </div>
                    <div id="ui-tab-typo" className="ui-tab" onClick={() => toggleTab(false)}>
                        <span className="tab-label"> Typography </span>
                    </div>
                </div>
                {showInputTab ? <InputWindow/> : <TypoWindow/>}
            </div>

            <SectionLabel id="export-icon" url={exportIcon} label="Export" exporticon={true}/>
            <div className="export-panel">
                <button onClick={jsonDownload}>Download JSON</button>
                
                <form action="/upload" method="POST" encType="multipart/form-data" onSubmit={handleImgUpload}>
                    <label for="file">Choose file</label>
                    <input 
                        type="file"
                        name="file"
                        id="file"
                        />
                    <input type="submit" value="submit"/>

                </form>
            </div>
        </div>
    );
    
}

export default UiComp;