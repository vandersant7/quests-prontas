import React from "react";

const Button = (props) => {
    return (
    <button 
    onClick={()=> props.labelshow(props.label)}>
        {props.label}
    </button>
    )
}

export default Button;