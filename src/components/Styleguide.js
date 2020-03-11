import React, { Component } from 'react';
import {Button} from '../ui';

import '../styles/create/StyleGuide.css';

import {StyleContext} from '../App';
import SectionLabel from './SectionLabel';
import FontDisplay from './FontDisplay';

import styleIcon from '../images/styleguideicon.png';

import {StyleContextConsumer} from '../contexts/StyleContext';
import ColorContext, { ColorContextConsumer } from '../contexts/ColorContext';
import withContext from '../helpers/withContext';
import FontContext, { FontContextConsumer } from '../contexts/FontContext';

class Styleguide extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
        <div className="style-guide-container">
    
          <SectionLabel
            url={styleIcon}
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
                          <span className="hex-span"> {color.hex} </span>
                          <span className="rgb-span"> rgb({color.rgb[0]}, {color.rgb[1]}, {color.rgb[2]}) </span>
                        </div>
                        
                        <div className="gradient-container">
                          {color.swatch.map(value => {
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

              {/* <StyleContextConsumer>
                {(value) => {
                    return <Button color={value.styles.primary}>Click me</Button>
                }}
              </StyleContextConsumer> */}
          </div>
        </div>


    );
  }
}

export default withContext(
  {
      context: ColorContext,
      mapValueToProps: (value) =>  ({colors: value.colors, addColor: value.addColor, updateColor: value.updateColor})
  },
  {
      context: FontContext,
      mapValueToProps: (value) =>  ({fonts: value.fonts, addFont: value.addFont, updateFont: value.updateFont})
  }
)(Styleguide); 
