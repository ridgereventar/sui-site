import React, { Component, useContext } from 'react';
import $ from 'jquery';
import '../styles/Create.css';
import {StyleContext} from '../App';
class Leftpanel extends Component {

    constructor(props) {
        super(props);
    }

    onFontChange(event) {
        console.log(event.target.value);
        $(".headerFont").css("font-family", `"${event.target.value}", sans-serif`);
    }

    render() {
        return (
            <React.Fragment>
                <label className="settingsLabel"> Fonts</label>

                <select className="font-dropdown" onChange={this.onFontChange} name="defaultFonts">
                    <option value="Red Hat Display">Red Hat Display</option>
                    <option value="Alata">Alata</option>
                    <option value="Montserrat">Montserrat</option>
                </select>
            </React.Fragment>
        );
    }
}

export default Leftpanel;