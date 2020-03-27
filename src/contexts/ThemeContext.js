import React from 'react';
import FontContext from './FontContext';
import ColorContext from './ColorContext';
import withContext from '../helpers/withContext';
const axios = require('axios').default;

const ThemeContext = React.createContext();

export const ThemeContextConsumer = ThemeContext.Consumer;

class ThemeContextClass extends React.Component {
    constructor(props) {
        super(props);

        // let theme = props.theme;

        // if(!theme) {
        //     theme = {
        //         colors: this.props.colors,
        //         fonts: this.props.fonts
        //     }
        // }

        // this.state = theme;

        this.state = {
            _id: "",
            themeName: "",
            creator: "",
            privacy: "",
            theme: {}
        }
        
    }

    setTheme = (themeData) => {
        console.log(themeData);
        this.setState({
            _id: themeData._id,
            themeName: themeData.themeName,
            creator: themeData.creator,
            privacy: themeData.privacy,
            theme: {
                colors: this.props.colors,
                fonts: this.props.fonts
            }       
        })
    }
    
    saveTheme = () => {
        axios.put(`/api/theme/${this.state._id}`, {
            themeName: this.state.themeName,
            creator: this.state.creator,
            privacy: this.state.privacy, 
            theme: this.state.theme
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <ThemeContext.Provider value={{
                _id: this.state._id,
                themeName: this.state.themeName,
                creator: this.state.creator,
                privacy: this.state.privacy,
                theme: this.state.theme, 
                setTheme: this.setTheme,
                saveTheme: this.saveTheme
            }}>
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