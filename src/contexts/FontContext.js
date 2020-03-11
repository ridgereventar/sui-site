import React from 'react';

const FontContext = React.createContext();

export const FontContextConsumer = FontContext.Consumer;

export class FontContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fonts: [
                {
                    type: "Primary", 
                    name: "", 
                    url: "",
                    weights: []
                },
                {
                    type: "Secondary", 
                    name: "", 
                    url: "",
                    weights: []
                }
            ]
        }
    }

    addFont = () => {
        this.setState((state) => {
            
            const newFonts = state.fonts;

            newFonts.push({type:"Extra", name: "", url: "", weights:[]});

            return {
                ...state,
                fonts: newFonts
            }
        })
    }

    updateFont = (index, font) => {
        this.setState((state) => {
            const newFonts = state.fonts;
            newFonts[index].name = font.label;
            newFonts[index].weights = font.weights;
            return {
                ...state,
                fonts: newFonts
            }
        })
    }

    render() {
        return (
            <FontContext.Provider value={{
                fonts: this.state.fonts,
                addFont: this.addFont,
                updateFont: this.updateFont
            }}>
                {this.props.children}
            </FontContext.Provider>
        )
    }
}

export default FontContext;