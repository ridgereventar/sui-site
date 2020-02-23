import React from 'react'; 
import '../styles/Create.css';

const BasicInput = (props) => {
    return (
        <div className="input-container">
            <div className="color-input-circle" style={{backgroundColor: props.hex}}></div>
            <label class="color-type-label">{props.type}</label>
            <input className="hexCodeInput" 
                type="text" 
                value={props.hex} 
                onChange={props.onChangeHex(props.index)}
            />
            <button id="colorwheel-btn"></button>
        </div>
    )
}

const AddInput = (props) => {
    return (
        <div className="input-container">
            <div className="color-input-circle"></div>
            <label className="color-type-label">{props.type}</label>
            <input className="hexCodeInput" 
                type="text"
                value={props.value}
                onChange={props.onChangeAddHex}
            />
            <button id="colorwheel-btn"></button>
            <button className="add-btn" onClick={props.addHex(props.value)}>Add</button>
        </div>
    )
}

const ColorInput = (props) => {
    const addInput = props.addInput; 
    if(addInput) {
        return <AddInput
                    type={props.type}
                    value={props.newValue}
                    onChangeAddHex={props.onChangeAddHex}
                    addHex={props.addHex}/>;
    } else {
        return <BasicInput
                    hex={props.hex}
                    type={props.type}
                    index={props.index}
                    onChangeHex={props.onChangeHex}/>;
    }
};

export default ColorInput;