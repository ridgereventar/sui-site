import React, { Component } from 'react';
import '../App.css';

class Styleguide extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="style-guide">
            <h4>Color Palette</h4>
            <hr/>
            <div className="color-palette-container">
                <div className="color-container" id="color1" style={{backgroundColor: `${this.props.color}`}}></div>
                <div className="color-container" id="color1"></div>
                <div className="color-container" id="color1"></div>
            </div>

            <h4>Typography</h4>
            <hr/>
            <h1>Headline Large</h1>
            <h2>Headline Medium</h2>
            <h3>Headline</h3>
            <h5>Body</h5>
                
        </div>
    );
  }
}

export default Styleguide;
