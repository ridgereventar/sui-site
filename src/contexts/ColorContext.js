import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ColorContext = React.createContext();

export const ColorContextConsumer = ColorContext.Consumer;

export const ColorContextProvider = (props) => {
    const {children} = props; 
    const {theme, updateTheme} = useContext(ThemeContext);
    const {colors} = theme;

    const hextorgb = (hex) => {
        return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
    };

    const componentToHex = (c) => {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    const rgbToHex = (r, g, b) => {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    const addColor = (type, hex) => {
        const newColors = colors;
        const rgb = hextorgb(hex); 
        const swatch = [];
        var nextcolor = rgb;
        for(var i=0; i < 5; i++) {
            swatch.push(rgbToHex(nextcolor[0], nextcolor[1], nextcolor[2]));
            var nextcolor = [nextcolor[0] + 15, nextcolor[1] + 10, nextcolor[2] + 2];
        }
        newColors.push({type, hex, rgb, swatch});
        updateTheme({colors: newColors});
    }

    const updateColor = (index, hex) => {
        const newColors = colors;
        newColors[index].hex = hex;
        const rgb = hextorgb(newColors[index].hex); 
        const swatch = [];
        var nextcolor = rgb;
        for(var i=0; i < 5; i++) {
            swatch.push(rgbToHex(nextcolor[0], nextcolor[1], nextcolor[2]));
            var nextcolor = [nextcolor[0] + 15, nextcolor[1] + 10, nextcolor[2] + 2];
        }
        newColors[index].rgb = rgb;
        newColors[index].swatch = swatch;
        updateTheme({colors: newColors}); 
    }

    return (
        <ColorContext.Provider value={{
            colors,
            addColor,
            updateColor
        }}>
            {children}
        </ColorContext.Provider>
    )
}

export default ColorContext;