import React, { useState, useContext } from 'react';
import cx from 'classnames';

import '../styles/ui/Button.css'

import ThemeContext from '../contexts/ThemeContext';

const Button = (props) => {
    
    const {theme} = useContext(ThemeContext)
    // console.log(JSON.stringify(theme));

    return (
        
        <button className={cx(
            "btn-basic",
            `btn--roundness-${props.roundness}`, 
            {
                ["btn-border"]: props.border                
            })} 
            style={{
                border: props.border ? `solid ${theme.colors[props.filter].hex} 1px` : 'none',
                backgroundColor: props.fill ? theme.colors[props.filter].hex : 'transparent'
            }}>
            Basic
            {props.children}
        </button>
    )
}

export default Button;