import React, { Component, useContext } from 'react';
import '../styles/create/Create.css';

import Settings from '../components/Settings';
import Styleguide from '../components/Styleguide';
import UiComp from '../components/UiComp';

import ColorContext from '../contexts/ColorContext';
import FontContext from '../contexts/FontContext';
import withContext from '../helpers/withContext';

class Create extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>

                <div id="header">
                </div>

                <div className="playground-window">
                    <Settings/>
                    <Styleguide/>
                    <UiComp/>
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
  