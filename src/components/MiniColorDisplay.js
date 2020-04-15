import React from 'react'; 
import '../styles/Color.css';

const MiniColorDisplay = (props) => {
    return (
        <div className="mini-display-container">
            <div className="mini-color-icon" style={{backgroundColor: `${props.color.hex}`}}></div>
            <span className="mini-hex-label">{props.color.hex}</span>
        </div>
    )
}

export default MiniColorDisplay;