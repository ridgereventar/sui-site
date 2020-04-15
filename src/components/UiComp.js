import React, {useState} from 'react';
import '../styles/UiComp.css'; 

import SectionLabel from './SectionLabel';
import InputWindow from './InputWindow';
import TypographyWindow from './TypographyWindow';
import Export from './Export';

import cx from 'classnames';

import uicompIcon from '../images/uicompicon.png';

// Ui Component panel that displays the generated components.
const UiComp = (props) => {

    // tab toggle between inputWindow and TypographyWindow
    const [showInputTab, setShowInputTab] = useState(true);
    
    const toggleTab = (choice) => {
        setShowInputTab(choice);
    }

    return(
        <div className="ui-comp-container">
            <SectionLabel url={uicompIcon} label="Ui Components"/>

            <div className="ui-panel">
                <div className="ui-tab-container">
                    <div className={cx(
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
                {showInputTab ? <InputWindow/> : <TypographyWindow/>}
            </div>

            <Export/>

        </div>
    );
}

export default UiComp;