import React, { Component } from 'react';
import {Button} from '../ui';

import '../styles/create/StyleGuide.css';

import {StyleContext} from '../App';
import SectionLabel from './SectionLabel';
import FontDisplay from './FontDisplay';

class Styleguide extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div className="styleguide-container">
    
          <SectionLabel
            url={require('../images/styleguideicon.png')}
            label="Style Guide"/>

          <div className="style-guide">

              <h1 className="setting-label"> Colors </h1>

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


              <h1 className="setting-label">Fonts</h1>                
              
              {this.props.fonts.map(font => {
                return (
                    <FontDisplay
                      font={font}/>
                  )
              })}              

              {/* <StyleContext.Consumer>
                {(value) => {
                    return <Button color={value.styles.button.primary}/>
                }}
              </StyleContext.Consumer> */}
          </div>
        </div>


    );
  }
}

export default Styleguide;
