import React, {Component} from 'react'; 
import '../styles/Create.css';

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
        // this.props.setPrimary(test);
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
            <div className="input-container">
                <div className="color-input-circle" style={{backgroundColor: this.state.newValue}}></div>
                <label className="color-type-label">Extra</label>
                <input className="hexCodeInput" 
                    type="text"
                    value={this.state.newValue}
                    onChange={this.onChangeAddHex}
                />
                <ColorPicker
                    inputAdd={true}
                    colorPickerAddHex={this.colorPickerAddHex}/>
                <button className="add-btn" onClick={this.props.addHex(this.state.newValue)}>Add</button>
            </div>
        )
    }
}

export default ColorInputAdd;
