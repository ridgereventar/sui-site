import React, {Component} from 'react'; 

const MiniColorDisplay = (props) => {
    return (
        <div className="mini-display-container">
            <div className="mini-color-icon"></div>
            <span className="mini-hex-label">#1EE0EF</span>
        </div>
    )
}

export default MiniColorDisplay;