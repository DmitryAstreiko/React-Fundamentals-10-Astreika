import React from "react";
import '../../App.css';

function Input(props) {
    return (
        <div className="InputMain">
            <input id="search" className="InputSearch" placeholder={props.placeholderText} />
            <label for="search">{props.labelText}</label>           
        </div>
    )
}

export default Input;