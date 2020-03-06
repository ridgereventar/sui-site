import React from 'react'; 
import '../styles/create/FontInput.css';

import Select from 'react-select';

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: 'black',
        "font-family": state.label,
        padding: 5
    }),
    control: base => ({
        ...base,
        minHeight: 20,
        "margin-bottom": '8px'
    }),
    dropdownIndicator: base => ({
        ...base,
        padding: 2
    }),
    valueContainer: base => ({
        ...base,
        padding: '0px 1px'
    }),
    input: base => ({
        ...base,
        margin: 0,
        padding: 0
    }),
}

const FontInput = (props) => {
    const options = [];

    {props.fontOptions.map((font) => {
        options.push({value: font.id, label: font.title, weights: font.weights});
    })}

    return (
        <div className="font-input-container">
            <h3 className="font-input-icon" style={{"font-family": props.font.name}}>Aa</h3>
            <div className="font-select-container"> 
                <label className="font-type-label" for="font-select">{props.font.type}</label>
                <Select
                    styles={customStyles}
                    options={options}
                    onChange={props.updateFont(props.index)}
                    />
            </div>
        </div>
    )
}

export default FontInput;