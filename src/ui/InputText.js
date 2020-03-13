import React, { useState, useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

import '../styles/ui/InputText.css'

import cx from 'classnames';

const InputText = (props) => {
    
    const theme = useContext(ThemeContext);

    return (
        
        <React.Fragment>
            <label className={cx(
                "input-label",
            )}> 
            Label </label>
            
            <input className={cx(
                "input-text-field",
                `input--roundness-${props.roundness}`,
                {
                    ["input-line"]: props.line
                }
                )}
                style={{
                    border: props.border ?  `solid ${theme.colors[props.filter].hex} 1px` : 'none',
                    borderBottom: props.line ? `solid ${theme.colors[props.filter].hex} 1px` : `solid ${theme.colors[props.filter].hex} 1px` 
                }}
                placeholder="input text"
                type="text"
                id=""
                name=""
                />

        </React.Fragment>
    )
}

export default InputText;