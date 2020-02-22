import React, { Component } from 'react';
import {Button} from '../ui';

import '../styles/Create.css';

import {StyleContext} from '../App';

class Styleguide extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {

    return (
        <div className="style-guide">
            
            <h1> Colors </h1>

            <div className="color-palette-container">
              {this.props.colors.map(color => {
                return (
                  <React.Fragment>
                    <div className="hex-box">
                      
                      <div className="color-container" id="color1" style={{backgroundColor: `${color.hex}`}}></div>
                      
                      <div className="color-info-container">
                        <h2 className="hex-type-label"> {color.type} </h2>
                        <span style={{"margin-bottom": "5px"}}> {color.hex} </span>
                        <span> rgb({color.rgb[0]}, {color.rgb[1]}, {color.rgb[2]}) </span>
                      </div>
                      
                      <div className="gradient-container">
                        {color.gradient.map(value => {
                          return(
                            <div className="gradient-square" style={{backgroundColor: `${value}`}}></div>
                          )
                        })}
                      </div>
                    </div>
                  </React.Fragment>
                )
              })}
            </div>

            <h1>Fonts</h1>
            
            <h1 id="header1" class="headerFont">Headline Large</h1>
            <h2 id="header2" class="headerFont">Headline Medium</h2>
            <h3 id="header3" class="headerFont">Headline</h3>
            <h5>Body</h5>
                
            <StyleContext.Consumer>
              {(value) => {
                  return <Button color={value.styles.button.primary}/>
              }}
            </StyleContext.Consumer>
        </div>
    );
  }
}

export default Styleguide;
