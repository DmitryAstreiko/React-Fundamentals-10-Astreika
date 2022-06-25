import React from "react";
import '../../../../App.css';
import AddAuthor from '../AddAuthor/AddAuthor';
import Duration from '../Duration/Duration';

function Authors(props) {
    return (
        <div className="AuthorsMain">
            <div className="AuthorsAddAndDuration">
                <AddAuthor />
                <Duration />
            </div>
            <div className="AuthorsListAndDelete" >
                
            </div>
        </div>
    )
}

export default Authors;