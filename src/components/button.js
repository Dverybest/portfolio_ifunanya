import React from "react";

const Button = ({className, onclick,btnText}) =>{
    return(
        <button className={className} onClick={onclick}>{btnText}</button>
    )
}

export default Button;