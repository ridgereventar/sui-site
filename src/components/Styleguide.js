import React, { Component } from 'react';
import '../App.css';

import Hex from '../components/Hex';


class Styleguide extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {

    console.log(this.props.colors);
    return (
        <div className="style-guide">
            <h4>Color Palette</h4>
            <hr/>

            <div className="color-palette-container">
              
              {this.props.colors.map(color => {
                return (
                  <Hex color={color.hex}></Hex>
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
