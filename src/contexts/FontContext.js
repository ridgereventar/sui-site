import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const FontContext = React.createContext();
export const FontContextConsumer = FontContext.Consumer;

export const FontContextProvider = (props) => {
    const {children} = props;
    const {theme, updateTheme} = useContext(ThemeContext);
    const {fonts} = theme;

    // These two methods are called inside Settings.js to either add or update a font.
    
    const addFont = () => {
        // First makes a copy of the current fonts in the ThemeContext
        const newFonts = fonts;
        // Pushes a new font
        newFonts.push({type:"Extra", name: "", url: "", weights:[]});
        // Then calls updateTheme to apply the changes
        updateTheme({fonts: newFonts});
    }

    const updateFont = (index, font) => {
        // First makes a copy of the current fonts in the ThemeContext
        const newFonts = fonts;
        // Updates the font object at the given index
        newFonts[index].name = font.label;
        newFonts[index].weights = font.weights;
        // Then calls updateTheme to apply the changes
        updateTheme({fonts: newFonts})
    }

    return (
        <FontContext.Provider value={{
            fonts,
            addFont,
            updateFont
        }}>
            {children}
        </FontContext.Provider>
    )
}

export default FontContext;