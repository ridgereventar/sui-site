import React, { useState, useContext } from 'react';
import withContext from '../../helpers/withContext';
import ColorContext from '../../contexts/ColorContext';
import FontContext from '../../contexts/FontContext';
import ThemeContext from '../../contexts/ThemeContext';

import cx from 'classnames';

const Button = (props) => {
    
    const [count, setCount] = useState(0);
    const theme = useContext(ThemeContext)

    console.log(JSON.stringify(theme));

    return (
        
        <button className={cx(
            "btn-primary", 
            "btn-round", 
            {
                ["btn-disabled"]: true
            })} 
            style={{backgroundColor: theme.colors[0].hex}} onClick={(e) => {setCount(count + 1)}}>
            
            {count}
            {props.children}
        </button>
    )
}

export default Button;