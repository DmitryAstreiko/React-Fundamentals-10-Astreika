import React from "react";
import '../../../../App.css';
import Button from "../../../../common/Button/Button";

function AuthorItem(props) {
    return (
        <div className="AuthorItemMain">
            <label>{props.authorName}</label>
            <Button buttonText="Add author" />
        </div>
    )
} 

export default AuthorItem;