import React, { Component, useContext } from 'react';
import '../styles/create/Create.css';

import Settings from '../components/Settings';
import Styleguide from '../components/Styleguide';
import UiComp from '../components/UiComp';

import {StyleContext} from '../App';
import { DEFAULT_FONTS } from '../constants';

import { StyleContextConsumer } from '../contexts/StyleContext';
import ColorContext, { ColorContextConsumer } from '../contexts/ColorContext';

import withContext from '../helpers/withContext';
import FontContext, { FontContextConsumer } from '../contexts/FontContext';



class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fonts: [
                {
                    type: "Primary",
                    name: "",
                    weights: []
                },
                {
                    type: "Secondary",
                    name: "",
                    weights: []
                }
            ],
            fontOptions: Object.values(DEFAULT_FONTS)
        };
    }


    render() {

        console.log(this.state.colors);
        console.log("fonts:");
        console.log(this.state.fonts);


        return (
            <React.Fragment>

                <div id="header">
                </div>

                <div className="playground-window">


                    <Settings
                        fontOptions={this.state.fontOptions}
                    />
                
                    <Styleguide/>
                    
                    <UiComp></UiComp>
                </div>

            </React.Fragment>
        );
    }
}

export default withContext(
    {
        context: ColorContext,
        mapValueToProps: (value) =>  ({addColor: value.addColor, updateColor: value.updateColor})
    },
    {
        context: FontContext,
        mapValueToProps: (value) =>  ({fonts: value.fonts, addFont: value.addFont, updateFont: value.updateFont})
    }
)(Create); 
  