import React, { Component, useContext } from 'react';
import '../styles/Create.css';
import Doc from '../DocService';
import PdfContainer from '../PdfContainer';

import Leftpanel from '../components/Leftpanel';
import Styleguide from '../components/Styleguide';

class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: "#FFFFFF",
            colors: [
                {
                    hex: "#",
                    type: "Primary",
                    gradient: []
                },
                {
                    hex: "#",
                    type: "Secondary",
                    gradient: []
                },
                {
                    hex: "#", 
                    type: "Tertiary",
                    gradient: []
                }
            ]
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

                newColors[index].gradient = newArray;

                return {
                    ...state,
                    colors: newColors
                }
            })
        }
    }

    addHex = (value) => {
        this.setState((state) => {
            const newColors = state.colors;
            newColors.push({hex: value, type: "Extra"})

            return {
                ...state,
                colors: newColors
            }
        })
    }
    
    createPdf = (html) => Doc.createPdf(html);

    render() {

        console.log(this.state.colors);

        return (
            <React.Fragment>
                <div id="header">
                </div>
      
                <div className="playground-window">
                    <Leftpanel 
                        colors={this.state.colors}
                        onChangeHex={this.onChangeHex}
                        defaultHex={this.state.color}
                        addHex={this.addHex}
                    />
                    
                    <PdfContainer createPdf={this.createPdf}>
                        <Styleguide colors={this.state.colors}></Styleguide>

                    </PdfContainer>

                    <div id="settings-panel-right" className="settings-panel-container">
                    </div>
                </div>
      
                <div id="footer">
                </div>  
            </React.Fragment>
        );
    }
}

export default Create;