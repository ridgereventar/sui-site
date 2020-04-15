import React, {Component} from 'react'; 
import {ChromePicker} from 'react-color';

import '../styles/Color.css';

// A button component, that uses 'react-color' library to display a color picker.
class ColorPicker extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            displayColorPicker: false,
            colorPickerValue: '#fff'
        }
    }

    // Toggles the color picker
    handleClick = () => {
        this.setState({
            displayColorPicker: !this.state.displayColorPicker
        })
    }

    handleClose = () => {
        this.setState({
            displayColorPicker: false
        })
    }

    // OnChange listener that is passed to the 'ChromePicker' component from react-color
    handleChangeComplete = (color) => {
        // Checks if it is for ColorInput or ColorInputAdd. 
        // If it's for ColorInputAdd it will update the newValue to be added
        // Else it will update the current hex value
        if(this.props.inputAdd) {
            this.props.colorPickerAddHex(color.hex);
        } else { 
            this.props.onColorPicked(this.props.index, color.hex);
        }
        this.setState({ colorPickerValue: color.hex });
    };

    render() {
        return (
            <div className="color-picker-container">
                <button className="colorwheel-btn" onClick={this.handleClick}></button>
                {this.state.displayColorPicker ? 
                    <div className="popover">
                        <div className="cover" onClick={this.handleClose}/>
                        <ChromePicker 
                            color={ this.state.colorPickerValue }
                            onChangeComplete={ this.handleChangeComplete }/>
                    </div> : null
                }
            </div>
        )
    }
}

export default ColorPicker;