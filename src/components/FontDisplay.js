import React from 'react'; 
import '../styles/Create.css';

const sampleText = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                    "abcdefghjiklmnopqrstuvwxyz", 
                    "123456789 (.,;:?!@)"]

const FontDisplay = (props) => {
    return (
        <div className="font-display-container">
            <div className="font-display-icon-container">
                <h3 className="font-display-icon" style={{"font-family":`${props.font.name}`}}>Aa</h3>
            </div>
            <div className="font-display-info-container">
                <h2 className="font-type-label">{props.font.type}</h2>
                <span className="display-font-name" style={{"font-family":`${props.font.name}`}}>{props.font.name}</span>
            </div>
            <div className="divider-vert"></div>
            <div className="font-weight-info-container">
                {props.font.weights.map(weight => {
                    return (
                        <span className="font-weight-label" 
                              style={{"font-weight": `${weight}`, "font-family": `${props.font.name}`}}
                              >{weight}</span>
                    )
                })}
            </div>
            <div className="font-sample-container">
                {props.font.weights.map((weight, index) => {
                    return (
                        <p className="font-weight-sample"
                           style={{"font-weight": `${weight}`, "font-family": `${props.font.name}`}} 
                           >{sampleText[index]}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default FontDisplay;