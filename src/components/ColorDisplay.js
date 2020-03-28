import React from 'react';

import '../styles/create/ColorDisplay.css';

const ColorDisplay = (props) => {
    return (
        <React.Fragment>
            <div className="hex-box">
            
                <div className="color-container" id="color1" style={{backgroundColor: `${props.color.hex}`}}/>
            
                <div className="color-info-container">
                    <h2 className="hex-type-label"> {props.color.type} </h2>
                    <span className="hex-span"> {props.color.hex} </span>
                    <span className="rgb-span"> rgb({props.color.rgb[0]}, {props.color.rgb[1]}, {props.color.rgb[2]}) </span>
                </div>
                
                <div className="gradient-container">
                    {props.color.swatch.map((value, index) => {
                    return(
                        <div key={index} className="gradient-square" style={{backgroundColor: `${value}`}}></div>
                    )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ColorDisplay;