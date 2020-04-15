import React, {Component} from 'react';

import Blob from 'blob';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { initialState } from "../helpers/constants";  //See constants.js to view the initial theme template state.

const axios = require('axios').default;
const ThemeContext = React.createContext();
export const ThemeContextConsumer = ThemeContext.Consumer;

export class ThemeContextProvider extends Component {
    
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    // The ThemeContextProvider mounts when the Create.js page is rendered.
    componentDidMount = () => {
        // When the create page is rendered we grab the themeId in the url
        var url = new URL(window.location);
        let searchParams = new URLSearchParams(url.search);
        if(searchParams.has('id')) {
            // with the id, we call a get request to get the theme object from the database and assign it to the state.
            axios.get(`api/theme/${searchParams.get('id')}`).then((res) => {
                this.setState(res.data);
            }).catch(error => {
                console.log(error);
            })
        } else {
            console.log("ERROR: themeId not found.")
        }
    }

    // The first update method is given to components that need to update a value inside the theme object (i.e. any color or font)
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
 
    // The second update method is given to components that need to update a theme attribute (i.e. themeName, privacy, imageId, etc.)
    updateThemeAttr = (newAttr) => {
        this.setState({
            ...this.state, 
            ...newAttr
        }, () => {
            this.saveTheme();
        });
    }

    // saveTheme is called after every update to overwrite the previous state inside the database with the new one. 
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

    // This method is used by the Export.js panel and uses 'Blob' to format the object correctly
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

    // This method is also used by Export.js panel and uses libraries 'jspdf' and 'html2canvas' to handle pdf downloads.
    pdfDownload = () => {
        
        // The page size for each pdf is dynamic. 
        const input = document.getElementById('styleguide');

        // To do this, I temporarily increase the div height
        input.style.height = "max-content";
    
        var divHeight = input.offsetHeight;
        var divWidth = input.offsetWidth;
        var ratio = divHeight/divWidth;
        
        // Export the div
        html2canvas(input).then((canvas) => {
          const data = canvas.toDataURL('image/png');
          const pdf = new jsPDF('p','in', [612, divHeight]);
          var width = pdf.internal.pageSize.getWidth();
          var height = height = ratio * width
          pdf.addImage(data, 'PNG', 0, 0, width, height);
          pdf.save(`${this.state.themeName}.pdf`);
        })
        
        // Then decrease the div height back to the original.
        input.style.height = `792px`;
    }

    render() {
        return (
            <ThemeContext.Provider value={{
                ...this.state,
                updateTheme: this.updateTheme,
                updateThemeAttr: this.updateThemeAttr,
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