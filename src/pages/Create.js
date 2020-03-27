import React, { Component, useContext } from 'react';
import '../styles/create/Create.css';

import Settings from '../components/Settings';
import Styleguide from '../components/Styleguide';
import UiComp from '../components/UiComp';


import withContext from '../helpers/withContext';
import ThemeContext from '../contexts/ThemeContext';

class Create extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.theme);
        return (
            <React.Fragment>

                <div id="header">
                    <h3 style={{color: 'white', display: 'inline'}}>{this.props.themeName}</h3>
                    <button onClick={this.props.saveTheme}>Save</button>
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
        context: ThemeContext,
        mapValueToProps: (value) =>  ({themeName: value.themeName, 
                                        theme: value.theme, 
                                        setTheme: value.setTheme,
                                        saveTheme: value.saveTheme})
    }
)(Create); 
  