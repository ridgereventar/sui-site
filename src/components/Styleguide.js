import React, { useContext } from 'react';

import '../styles/StyleGuide.css';

import SectionLabel from './SectionLabel';
import ColorDisplay from './ColorDisplay';
import FontDisplay from './FontDisplay';

import ColorContext from '../contexts/ColorContext';
import FontContext from '../contexts/FontContext';

import styleIcon from '../images/styleguideicon.png';

// The main style guide component, maps the color's to ColorDisplay's and fonts to FontDisplay's
const Styleguide = (props) => {

  const {fonts} = useContext(FontContext);
  const {colors} = useContext(ColorContext);

  return (
      <div className="style-guide-container">
        <SectionLabel url={styleIcon} label="Style Guide"/>

        <div id="styleguide" className="style-guide">

            <h1 className="styleguide-label"> Colors </h1>
            {colors.map((color, index) => {
              return (
                <ColorDisplay key={index} color={color}/>
              )
            })}

            <h1 className="styleguide-label">Fonts</h1>                
            {fonts.map((font, index) => {
              return (
                  <FontDisplay key={index} font={font}/>
                )
            })}              

        </div>
      </div>
  );
}

export default Styleguide; 
