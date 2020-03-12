import React from 'react';
import FontContext from './FontContext';
import ColorContext from './ColorContext';
import withContext from '../helpers/withContext';

const ThemeContext = React.createContext();

export const ThemeContextConsumer = ThemeContext.Consumer;

class ThemeContextClass extends React.Component {
    constructor(props) {
        super(props);

        let theme = props.theme;

        if(!theme) {
            theme = {
                colors: this.props.colors,
                fonts: this.props.fonts
            }
        }

        this.state = theme;
            
        
    }
    
    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export const ThemeContextProvider = withContext(
    {
        context: ColorContext,
        mapValueToProps: (value) =>  ({colors: value.colors})
    },
    {
        context: FontContext,
        mapValueToProps: (value) =>  ({fonts: value.fonts})
    }
)(ThemeContextClass); 

export default ThemeContext;