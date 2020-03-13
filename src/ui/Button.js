import React, { useState, useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

import '../styles/ui/Button.css'

import cx from 'classnames';

const Button = (props) => {
    
    // const [count, setCount] = useState(0);
    const theme = useContext(ThemeContext)

    console.log(JSON.stringify(theme));

    return (
        
        <button className={cx(
            "btn-basic",
            `btn--roundness-${props.roundness}`, 
            {
                ["btn-border"]: props.border,
                ["btn-fill"]: props.fill,
                
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