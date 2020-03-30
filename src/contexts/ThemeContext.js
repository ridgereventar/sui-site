import React from 'react';
import Blob from 'blob';
const axios = require('axios').default;
const ThemeContext = React.createContext();
export const ThemeContextConsumer = ThemeContext.Consumer;

const initialState = {
    _id: "",
    themeName: "",
    creator: "",
    privacy: "",
    theme: {
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
        ],
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
    },
    imageId: ""
}

export class ThemeContextProvider extends React.Component {
    constructor(props) {
        super(props);
        // let theme = props.theme;
        this.state = initialState
        
    }

    componentDidMount = () => {
        var url = new URL(window.location);

        let searchParams = new URLSearchParams(url.search);
        console.log(searchParams)
        if(searchParams.has('id')) {

            axios.get(`api/theme/${searchParams.get('id')}`).then((res) => {
                this.setState(res.data);
            }).catch(error => {
                console.log(error);
            })
        } else {
            //error, redirect?
        }
    }

    componentDidUpdate(prevProps, prevState) {
        this.saveTheme();
    }

    init = () => {
        this.setState(initialState);
    };

    updateTheme = (newTheme) => {
        this.setState({
            ...this.state,
            theme: {
                ...this.state.theme,
                ...newTheme
            }
        })
    }
 
    saveTheme = () => {
        axios.put(`/api/theme/${this.state._id}`, {
            themeName: this.state.themeName,
            creator: this.state.creator,
            privacy: this.state.privacy, 
            theme: this.state.theme,
            themeId: this.state.themeId
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    jsonDownload = async() => {

        console.log("downloading json..");

        const fileName = "file";
        const json = JSON.stringify(this.state.theme);
        const blob = new Blob([json],{type:'application/json'});
        const href = await URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    render() {
        return (
            <ThemeContext.Provider value={{
                ...this.state,
                updateTheme: this.updateTheme,
                setTheme: this.setTheme,
                saveTheme: this.saveTheme,
                jsonDownload: this.jsonDownload
            }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContext;