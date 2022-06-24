import React from "react";
import '../../App.css';

function Input(props) {
    return (
        <div className="InputMain">
            <input id="search" className="InputSearch" />
            <label for="searh" placeholder={props.placeholderText}>{props.labelText}</label>
        </div>
    )
}

export default Input;