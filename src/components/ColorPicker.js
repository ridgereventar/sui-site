import React, {Component} from 'react'; 
import {ChromePicker} from 'react-color';

import '../styles/create/ColorInput.css';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayColorPicker: false,
            colorPickerValue: '#fff'
        }
    }

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

    handleChangeComplete = (color) => {
        if(this.props.inputAdd) {
            this.props.colorPickerAddHex(color.hex);
        } else {
            this.props.onColorPicked(this.props.index, color.hex);
        }
       
        this.setState({ colorPickerValue: color.hex });
    };

    render() {
        const popover = {
            position: 'absolute',
            zIndex: '2',
        }
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        }
        return (
            <div className="color-picker-container">
                <button className="colorwheel-btn" onClick={this.handleClick}></button>
                {this.state.displayColorPicker ? 
                    <div style={popover}>
                        <div style={cover} onClick={this.handleClose}/>
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