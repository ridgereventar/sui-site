import React, { Component } from 'react';

import '../styles/create/StyleGuide.css';

import SectionLabel from './SectionLabel';
import ColorDisplay from './ColorDisplay';
import FontDisplay from './FontDisplay';

import ColorContext, { ColorContextConsumer } from '../contexts/ColorContext';
import FontContext, { FontContextConsumer } from '../contexts/FontContext';
import withContext from '../helpers/withContext';

import styleIcon from '../images/styleguideicon.png';

class Styleguide extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props.colors);
    console.log(this.props.fonts);

    return (
        <div className="style-guide-container">
    
          <SectionLabel url={styleIcon} label="Style Guide"/>

          <div className="style-guide">

              <h1 className="setting-label"> Colors </h1>
              {this.props.colors.map(color => {
                return (
                  <ColorDisplay color={color}/>
                )
              })}

              <h1 className="setting-label">Fonts</h1>                
              {this.props.fonts.map(font => {
                return (
                    <FontDisplay font={font}/>
                  )
              })}              

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
