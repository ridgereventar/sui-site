import React from 'react'; 
import '../styles/Color.css';

import ColorPicker from './ColorPicker';

const ColorInput = (props) => {
    return (
        <div className="color-input-container">
            <div className="color-input-circle" style={{backgroundColor: props.hex}}></div>
            <label className="color-input-type">{props.type}</label>
            <input className="hex-input" 
                type="text" 
                value={props.hex} 
                onChange={props.onChangeHex(props.index)}
            />
            <ColorPicker
                inputAdd={false}
                onColorPicked={props.onColorPicked}
                index={props.index}/>
        </div>
    )
}

export default ColorInput;