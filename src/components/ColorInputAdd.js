import React, {Component} from 'react'; 
import '../styles/Color.css';

import ColorPicker from './ColorPicker';

// A color input field that adds an addition hex to the theme.
class ColorInputAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newValue: ""
        }
    }

    // Updates the new value to be added from the input text field
    onChangeAddHex = (e) => {
        var test = e.target.value;
        this.setState({newValue: test});
    }

    // Updates the new value to be added from the color picker (this method is passed to a ColorPicker component)
    colorPickerAddHex = (value) => {
        this.setState({newValue: value})
    }

    // Once the new color value is set, it is added to the theme using "addHex" from Settings.js
    render () {
        return (
            <div className="color-input-container">
                <div className="color-input-circle" style={{backgroundColor: this.state.newValue}}></div>
                <label className="color-input-type">Extra</label>
                <input className="hex-input" 
                    type="text"
                    value={this.state.newValue}
                    onChange={this.onChangeAddHex}
                />
                <ColorPicker
                    inputAdd={true}
                    colorPickerAddHex={this.colorPickerAddHex}/>
                <button className="hex-add-btn" onClick={this.props.addHex(this.state.newValue)}>Add</button>
            </div>
        )
    }
}

export default ColorInputAdd;
