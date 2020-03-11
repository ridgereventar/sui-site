import React from 'react';

const ColorContext = React.createContext();

export const ColorContextConsumer = ColorContext.Consumer;

export class ColorContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                {
                    type: "Primary", 
                    hex: "", 
                    rgb: "",
                    swatch: []
                }, 
                {
                    type: "Secondary", 
                    hex: "", 
                    rgb: "",
                    swatch: []
                }, 
                {
                    type: "Tertiary", 
                    hex: "", 
                    rgb: "",
                    swatch: []
                } 
            ]
        }
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

    addColor = (type, hex) => {
        this.setState((state) => {
            const newColors = state.colors;
            
            const rgb = this.hextorgb(hex); 
            const swatch = [];
            var nextcolor = rgb;
                
            for(var i=0; i < 5; i++) {
                swatch.push(this.rgbToHex(nextcolor[0], nextcolor[1], nextcolor[2]));
                var nextcolor = [nextcolor[0] + 15, nextcolor[1] + 10, nextcolor[2] + 2];
            }

            newColors.push({type, hex, rgb, swatch});

            return {
                ...state,
                colors: newColors
            }
        })
    }

    updateColor = (index, hex) => {
        this.setState((state) => {
            const newColors = state.colors;
            
            newColors[index].hex = hex;

            const rgb = this.hextorgb(newColors[index].hex); 
            const swatch = [];
            var nextcolor = rgb;
            
            for(var i=0; i < 5; i++) {
                swatch.push(this.rgbToHex(nextcolor[0], nextcolor[1], nextcolor[2]));
                var nextcolor = [nextcolor[0] + 15, nextcolor[1] + 10, nextcolor[2] + 2];
            }

            newColors[index].rgb = rgb;
            newColors[index].swatch = swatch;

            return {
                ...state,
                colors: newColors
            }
        })
    }

    render() {
        return (
            <ColorContext.Provider value={{
                colors: this.state.colors,
                addColor: this.addColor,
                updateColor: this.updateColor
            }}>
                {this.props.children}
            </ColorContext.Provider>
        )
    }
}

export default ColorContext;