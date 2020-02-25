import React from 'react'; 
import '../styles/Create.css';

const SectionLabel = (props) => {
    return (
        <div className="section-label-container">
            <div className="label-icon-container" style={{"background-image": props.url}}></div>
            <span className="section-label">{props.label}</span>
        </div>
    )
}

export default SectionLabel;