import React from 'react'; 
import '../styles/Font.css';

import Select from 'react-select';  // react Select provides a simple/modern dropdown component 
import {customStyles} from '../helpers/constants';

// Component for each font input field. Calls 'updateFont' from Settings.js to update the font.
const FontInput = (props) => {
    
    // using the fontOptions received from Settings.js, I formed an options map to pass to the Select component from 'react-select'
    const options = [];
    {props.fontOptions.map((font) => {
        options.push({value: font.id, label: font.title, weights: font.weights});
    })}

    return (
        <div className="font-input-container">
            <h3 className="font-input-icon" style={{fontFamily: props.font.name}}>Aa</h3>
            <div className="font-select-container"> 
                <label className="font-type-label">{props.font.type}</label>
                <Select
                    styles={customStyles}
                    options={options}
                    value={options.filter(option => option.label === props.font.name)}
                    onChange={props.updateFont(props.index)}
                    />
            </div>
        </div>
    )
}

export default FontInput;