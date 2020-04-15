import React from 'react';
import Blob from 'blob';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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
    imageId: "",
    isSaving: false
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
        // if(!prevState.isSaving) {
        //     this.saveTheme();
        // }
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
        }, () =>{
            this.saveTheme();
        })
    }
 
    updateThemeAttr = (newAttr) => {
        console.log(newAttr);
        console.log("updating image id...");
        this.setState({
            ...this.state, 
            ...newAttr
        }, () => {
            this.saveTheme();
        });
    }

    saveTheme = () => {
        this.setState({isSaving: true});
        axios.put(`/api/theme/${this.state._id}`, {
            themeName: this.state.themeName,
            creator: this.state.creator,
            privacy: this.state.privacy, 
            theme: this.state.theme,
            imageId: this.state.imageId
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            this.setState({isSaving: false});
        })
    }

    jsonDownload = async() => {
        const fileName = "theme";
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

    pdfDownload = () => {
        const input = document.getElementById('styleguide');
        input.style.height = "max-content";
    
        var divHeight = input.offsetHeight;
        var divWidth = input.offsetWidth;
        var ratio = divHeight/divWidth;
        html2canvas(input).then((canvas) => {
          const data = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p','in', [612, divHeight]);
          var width = pdf.internal.pageSize.getWidth();
          var height = height = ratio * width
          pdf.addImage(data, 'PNG', 0, 0, width, height);
          pdf.save(`${this.state.themeName}.pdf`);
        })
        input.style.height = `792px`;
    }

    render() {
        return (
            <ThemeContext.Provider value={{
                ...this.state,
                updateTheme: this.updateTheme,
                updateThemeAttr: this.updateThemeAttr,
                setTheme: this.setTheme,
                saveTheme: this.saveTheme,
                jsonDownload: this.jsonDownload,
                pdfDownload: this.pdfDownload
            }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContext;