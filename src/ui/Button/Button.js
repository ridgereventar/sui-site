import React from 'react';

const Button = (props) => {
    
    return (
        <button style={{backgroundColor: props.color}}>
            {props.children}
        </button>
    )
}

export default Button;