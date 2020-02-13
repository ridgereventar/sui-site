import React, { Component } from 'react';
import {Button} from '../ui';

import '../styles/Create.css';

import Hex from './Hex';
import Gradient from './Gradient';

import {StyleContext} from '../App';

class Styleguide extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {

    return (
        <div className="style-guide">
            <h4>Color Palette</h4>
            <hr/>

            <StyleContext.Consumer>
              {(value) => {
                  return <Button color={value.styles.button.primary}/>
              }}
            </StyleContext.Consumer>
            <div className="color-palette-container">
              
              {this.props.colors.map(color => {
                return (
                  <React.Fragment>
                    <div className="hex-box">
                      <Hex color={color.hex} type={color.type}></Hex>
                      <Gradient gradient={color.gradient}></Gradient>
                    </div>
                  </React.Fragment>
                )
              })}
            
            </div>

            <h4>Typography</h4>
            <hr/>
            <h1 id="header1" class="headerFont">Headline Large</h1>
            <h2 id="header2" class="headerFont">Headline Medium</h2>
            <h3 id="header3" class="headerFont">Headline</h3>
            <h5>Body</h5>
                
        </div>
    );
  }
}

export default Styleguide;
