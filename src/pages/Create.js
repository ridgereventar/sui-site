import React, { Component, useContext } from 'react';
import '../styles/Create.css';
import Doc from '../DocService';
import PdfContainer from '../PdfContainer';

import Settings from '../components/Settings';
import Styleguide from '../components/Styleguide';
import {StyleContext} from '../App';
import { DEFAULT_FONTS } from '../constants';

class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: [
                {
                    hex: "",
                    type: "Primary",
                    rgb: "",
                    gradient: []
                },
                {
                    hex: "",
                    type: "Secondary",
                    rgb: "",
                    gradient: []
                },
                {
                    hex: "", 
                    type: "Tertiary",
                    rgb: "",
                    gradient: []
                }
            ],
            fonts: [
                
            ],
            fontOptions: Object.values(DEFAULT_FONTS)
        };
    }

    hextorgb = (hex) => {
        return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
    };

    componentToHex = (c) => {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
      
    rgbToHex = (r, g, b) => {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }

    onChangeHex = (index) => {
        return (e) => {
            const value = e.target.value;
            this.setState((state) => {
                const newColors = state.colors;
                newColors[index].hex = value;
    
                const startcolor = this.hextorgb(newColors[index].hex); 
                const newArray = [];
                var nextcolor = startcolor;
                
                for(var i=0; i < 5; i++) {
                    newArray.push(this.rgbToHex(nextcolor[0], nextcolor[1], nextcolor[2]));
                    var nextcolor = [nextcolor[0] + 15, nextcolor[1] + 10, nextcolor[2] + 2];
                }

                newColors[index].rgb = startcolor;
                newColors[index].gradient = newArray;

                return {
                    ...state,
                    colors: newColors
                }
            })
        }
    }

    addHex = (value) => {
        return (e) => {
            this.setState((state) => {
                const newColors = state.colors;
                
                const startcolor = this.hextorgb(value); 
                const newArray = [];
                var nextcolor = startcolor;
                    
                for(var i=0; i < 5; i++) {
                    newArray.push(this.rgbToHex(nextcolor[0], nextcolor[1], nextcolor[2]));
                    var nextcolor = [nextcolor[0] + 15, nextcolor[1] + 10, nextcolor[2] + 2];
                }
    
                newColors.push({hex: value, type: "Extra", rgb: startcolor, gradient: newArray});
    
                return {
                    ...state,
                    colors: newColors
                }
            })
        }

    }
    
    addFont = (selectedFonts) => {
        this.setState((state) => {

            return {
                ...state,
                fonts: selectedFonts,
            }
        })
    }

    updateFont = (index, value) => {
        this.setState((state) => {
            const newFonts = state.fonts;

            newFonts[index] = value;

            return {
                ...state,
                fonts: newFonts
            }
        })
    }

    // createPdf = (html) => Doc.createPdf(html);

    render() {

        console.log(this.state.colors);
        console.log("fonts:");
        console.log(this.state.fonts);


        return (
            <React.Fragment>

                <div id="header">
                </div>

                <div className="playground-window">
                    {/* <StyleContext.Consumer>
                        {({handlers}) => 
                        }
                    </StyleContext.Consumer> */}

                    <Settings
                        colors={this.state.colors}
                        fonts={this.state.fonts}
                        onChangeHex={this.onChangeHex}
                        addHex={this.addHex}
                        addFont={this.addFont}
                        updateFont={this.updateFont}
                        fontOptions={this.state.fontOptions}
                        // setPrimary={handlers.setPrimary}
                    />
                
                    <Styleguide colors={this.state.colors}></Styleguide>
                    
                    <div id="settings-panel-right" className="settings-container">
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Create; 