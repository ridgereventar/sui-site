import React, {Component} from 'react'; 
import '../styles/Color.css';

import ColorPicker from './ColorPicker';

class ColorInputAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newValue: ""
        }
    }

    onChangeAddHex = (e) => {
        var test = e.target.value;
        this.setState(state => {
            return {
              ...state,
              newValue: test
            }
        })
    }

    colorPickerAddHex = (value) => {
        this.setState(state => {
            return {
              ...state,
              newValue: value
            }
        })
    }


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
