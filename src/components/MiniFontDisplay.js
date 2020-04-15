import React from 'react';
import '../styles/Font.css';

const MiniFontDisplay = (props) => {
    return (
        <div className="mini-display-container">
            <span className="mini-font-icon" style={{fontFamily:`${props.font.name}`}}>Aa</span>
            <span className="mini-font-name" style={{fontFamily:`${props.font.name}`}}>{props.font.name}</span>
        </div>
    )
}

export default MiniFontDisplay;