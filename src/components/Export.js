import React, {useContext} from 'react'; 
import '../styles/Export.css';

import ThemeContext from '../contexts/ThemeContext';

import exportIcon from '../images/exporticon.png';
import SectionLabel from './SectionLabel';

// The export panel consists of two download buttons that call methods from the ThemeContext. 
const Export = (props) => {

    const {jsonDownload, pdfDownload} = useContext(ThemeContext);

    return (
        <React.Fragment>
            <SectionLabel id="export-icon" url={exportIcon} label="Export" exporticon={true} lowTier={true}/>
            <div className="export-panel">
                <div className="download-btn" onClick={jsonDownload}>
                    <span className="download-label">Download JSON</span>
                    <div className="json-icon"></div>
                </div>
                <div className="download-btn" onClick={pdfDownload}>
                    <span className="download-label">Download PDF</span>
                    <div className="pdf-icon"></div>
                </div>
            </div> 
        </React.Fragment> 
    )
}

export default Export;