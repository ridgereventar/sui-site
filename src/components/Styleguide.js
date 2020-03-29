import React, { useContext } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import '../styles/create/StyleGuide.css';

import SectionLabel from './SectionLabel';
import ColorDisplay from './ColorDisplay';
import FontDisplay from './FontDisplay';

import ColorContext from '../contexts/ColorContext';
import FontContext from '../contexts/FontContext';
import ThemeContext from '../contexts/ThemeContext';

import styleIcon from '../images/styleguideicon.png';

const Styleguide = (props) => {

  const {themeName} = useContext(ThemeContext);
  const {fonts} = useContext(FontContext);
  const {colors} = useContext(ColorContext);

  const handleDownload = () => {
    const input = document.getElementById('styleguide');
    input.style.height = "max-content";

    var divHeight = input.offsetHeight;
    var divWidth = input.offsetWidth;
    var ratio = divHeight/divWidth;
    html2canvas(input).then((canvas) => {
      const data = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p','in', [612, divHeight]);
      var width = pdf.internal.pageSize.getWidth();
      var height = height = ratio * width
      pdf.addImage(data, 'PNG', 0, 0, width, height);
      pdf.save(`${themeName}.pdf`);
    })
    input.style.height = `712px`;

  }

  return (
      <div className="style-guide-container">
        <SectionLabel url={styleIcon} label="Style Guide"/>

        <div id="styleguide" className="style-guide">

            <h1 className="setting-label"> Colors </h1>
            {colors.map((color, index) => {
              return (
                <ColorDisplay key={index} color={color}/>
              )
            })}

            <h1 className="setting-label">Fonts</h1>                
            {fonts.map((font, index) => {
              return (
                  <FontDisplay key={index} font={font}/>
                )
            })}              

        </div>
        <button onClick={handleDownload}>download pdf</button>
      </div>
  );
  
}

export default Styleguide; 
