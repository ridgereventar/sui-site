import React, {Component} from 'react'; 
import '../styles/Create.css';

import ColorPicker from './ColorPicker';

class ColorInput extends Component {

    render () {
        return (
            <div className="input-container">
                <div className="color-input-circle" style={{backgroundColor: this.props.hex}}></div>
                <label class="color-type-label">{this.props.type}</label>
                <input className="hexCodeInput" 
                    type="text" 
                    value={this.props.hex} 
                    onChange={this.props.onChangeHex(this.props.index)}
                />
                <ColorPicker
                    inputAdd={false}
                    onColorPicked={this.props.onColorPicked}
                    index={this.props.index}/>
            </div>
        )
    }
}

export default ColorInput;