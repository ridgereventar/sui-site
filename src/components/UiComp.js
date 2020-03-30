import React, {Component, useState, useContext} from 'react';
import { Route, NavLink, Switch } from "react-router-dom";

import '../styles/create/UiComp.css'; 

import SectionLabel from './SectionLabel';

import uicompIcon from '../images/uicompicon.png';
import exportIcon from '../images/exporticon.png';
import InputWindow from './InputWindow';
import TypoWindow from './TypoWindow';
import ThemeContext from '../contexts/ThemeContext';
const axios = require('axios').default;

const UiComp = (props) => {

    const [showInputTab, setShowInputTab] = useState(true);
    const [selectedFile, setSelectedFile] = useState(null);

    const {jsonDownload} = useContext(ThemeContext);
    const {updateImageId} = useContext(ThemeContext);

    const toggleTab = (choice) => {
        setShowInputTab(choice);
    }

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0]);
    }

    const handleImgUpload = (event) => {
        event.preventDefault();
        var data = new FormData();
        data.append('file', selectedFile);
        axios.post('/upload', data, {}).then(res => {
            console.log(res.data.id);
            updateImageId(res.data.id);
        })

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
                
                <form onSubmit={handleImgUpload}>
                    <label htmlFor="file">Choose file</label>
                    <input 
                        type="file"
                        name="file"
                        id="file"
                        onChange={handleFileChange}
                        />
                    <input type="submit" value="submit"/>

                </form>
            </div>
        </div>
    );
    
}

export default UiComp;