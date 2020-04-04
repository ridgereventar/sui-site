import React, {useState, useContext} from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import cx from 'classnames';

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
    
    const {themeName} = useContext(ThemeContext);
    const {jsonDownload} = useContext(ThemeContext);

    const toggleTab = (choice) => {
        setShowInputTab(choice);
    }

    const handleDownload = () => {
        const input = document.getElementById('styleguide');
        input.style.height = "max-content";
    
        var divHeight = input.offsetHeight;
        var divWidth = input.offsetWidth;
        var ratio = divHeight/divWidth;
        html2canvas(input).then((canvas) => {
          const data = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p','in', [612, divHeight]);
          var width = pdf.internal.pageSize.getWidth();
          var height = height = ratio * width
          pdf.addImage(data, 'PNG', 0, 0, width, height);
          pdf.save(`${themeName}.pdf`);
        })
        input.style.height = `792px`;
    
      }

    return(
        <div className="ui-comp-container">
            <SectionLabel url={uicompIcon} label="Ui Components"/>

            <div className="ui-panel">

                <div className="ui-tab-container">
                    <div id="ui-tab-input-nav" 
                         className={cx(
                            "ui-tab",
                            {
                                ["selected-tab"]: showInputTab
                            }
                         )} 
                         onClick={() => toggleTab(true)}>
                        <span className="tab-label">Input / Navigation</span>
                    </div>
                    <div id="ui-tab-typo" 
                        className={cx(
                            "ui-tab",
                            {
                                ["selected-tab"]: !showInputTab
                            }  
                        )} onClick={() => toggleTab(false)}>
                        <span className="tab-label"> Typography </span>
                    </div>
                </div>
                {showInputTab ? <InputWindow/> : <TypoWindow/>}
            </div>

            <SectionLabel id="export-icon" url={exportIcon} label="Export" exporticon={true} lowTier={true}/>
            <div className="export-panel">
                <div className="download-btn" onClick={jsonDownload}>
                    <span className="download-label">Download JSON</span>
                    <div className="json-icon"></div>
                </div>
                <div className="download-btn" onClick={handleDownload}>
                    <span className="download-label">Download PDF</span>
                    <div className="pdf-icon"></div>
                </div>
            </div>
        </div>
    );
    
}

export default UiComp;