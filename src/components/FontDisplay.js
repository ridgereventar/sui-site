import React from 'react'; 
import '../styles/create/FontDisplay.css';

const sampleText = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                    "abcdefghjiklmnopqrstuvwxyz", 
                    "123456789 (.,;:?!@)"]

const FontDisplay = (props) => {
    return (
        <div className="font-display-container">
            <div className="font-display-icon-container">
                <h3 className="font-display-icon" style={{fontFamily:`${props.font.name}`}}>Aa</h3>
            </div>
            <div className="font-display-info-container">
                <h2 className="font-display-type">{props.font.type}</h2>
                <span className="font-display-name" style={{fontFamily:`${props.font.name}`}}>{props.font.name}</span>
            </div>
            <div className="divider-vert"></div>
            <div className="font-display-weight-container">
                {props.font.weights.map(weight => {
                    return (
                        <span className="font-display-weight" 
                              style={{fontWeight: `${weight}`, fontFamily: `${props.font.name}`}}
                              >{weight}</span>
                    )
                })}
            </div>
            <div className="font-display-sample-container">
                {props.font.weights.map((weight, index) => {
                    return (
                        <p className="font-display-sample"
                           style={{fontWeight: `${weight}`, fontFamily: `${props.font.name}`}} 
                           >{sampleText[index]}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default FontDisplay;