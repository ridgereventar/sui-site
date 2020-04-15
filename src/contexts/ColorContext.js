import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ColorContext = React.createContext();
export const ColorContextConsumer = ColorContext.Consumer;

export const ColorContextProvider = (props) => {
    const {children} = props; 
    const {theme, updateTheme} = useContext(ThemeContext);
    const {colors} = theme;

    // These methods handle hex & rgb conversions for the color swatch algorithm

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

    // color swatch algorithm, increases rgb values by fixed constants.
    const getSwatch = (rgb) => {
        var swatch = [];
        for(var i=0; i < 5; i++) {
            swatch.push(rgbToHex(rgb[0], rgb[1], rgb[2]));
            rgb = [rgb[0] + 15, rgb[1] + 10, rgb[2] + 2];
        }
        return swatch;
    }

    // These two methods are called inside Settings.js to either add or update a color.

    const addColor = (type, hex) => {
        // First makes a copy of the current colors in the ThemeContext
        const newColors = colors;
        const rgb = hextorgb(hex); 
        const swatch = getSwatch(rgb);
        // Pushes a new color, with the generated rgb and swatch
        newColors.push({type, hex, rgb, swatch});
        // Then calls updateTheme to apply the changes
        updateTheme({colors: newColors});
    }

    const updateColor = (index, hex) => {
        // First makes a copy of the current colors in the ThemeContext
        const newColors = colors;
        const rgb = hextorgb(newColors[index].hex); 
        const swatch = getSwatch(rgb);
        // Updates the font object at the given index
        newColors[index].hex = hex;
        newColors[index].rgb = rgb;
        newColors[index].swatch = swatch;
        // Then calls updateTheme to apply the changes
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