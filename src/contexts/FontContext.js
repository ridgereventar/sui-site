import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const FontContext = React.createContext();

export const FontContextConsumer = FontContext.Consumer;

export const FontContextProvider = (props) => {
    const {children} = props;
    const {theme, updateTheme} = useContext(ThemeContext);
    const {fonts} = theme;

    const addFont = () => {
        const newFonts = fonts;
        newFonts.push({type:"Extra", name: "", url: "", weights:[]});
        updateTheme({fonts: newFonts});
    }

    const updateFont = (index, font) => {
        const newFonts = fonts;
        newFonts[index].name = font.label;
        newFonts[index].weights = font.weights;
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