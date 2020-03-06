import React from 'react'; 
import '../styles/create/SectionLabel.css';

const SectionLabel = (props) => {
    return (
        <div className="section-header">
            <div className="section-label-container">
                <div className="label-icon-container" style={{"background-image": `url(${props.url})`}}></div>
                <span className="section-label">{props.label}</span>
            </div>
        </div>
    )
}

export default SectionLabel;