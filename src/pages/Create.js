import React, { Component, useContext } from 'react';
import '../App.css';

import Leftpanel from '../components/Leftpanel';
import Styleguide from '../components/Styleguide';

class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: "#FFFFFF",
            colors: [
                {
                    hex: "#FFFFFF"
                }
            ]
        };
    }

    onChangeHex = (index) => {
        return (e) => {
            const value = e.target.value;
            this.setState((state) => {
                const newColors = state.colors;
                newColors[index].hex = value;
    
                return {
                    ...state,
                    colors: newColors
                }
            })
        }
    }

    addHex = (value) => {
        this.setState((state) => {
            const newColors = state.colors;
            newColors.push({hex: value})

            return {
                ...state,
                colors: newColors
            }
        })
    }
    
    

    render() {
        return (
            <React.Fragment>
                <div id="header">
                </div>
      
                <div className="playground-window">
                    <Leftpanel 
                        colors={this.state.colors}
                        onChangeHex={this.onChangeHex}
                        defaultHex={this.state.color}
                        addHex={this.addHex}
                    />

                    <Styleguide colors={this.state.colors}></Styleguide>

                    <div id="settings-panel-right" className="settings-panel-container">
                    </div>
                </div>
      
                <div id="footer">
                </div>  
            </React.Fragment>
        );
    }
}

export default Create;