import React, { useState } from "react";
import '../../../../App.css';
import AddAuthor from '../AddAuthor/AddAuthor';
import Duration from '../Duration/Duration';
import AuthorItem from '../AuthorItem/AuthorItem';

function Authors(props) {
    const [items, setItems] = useState(props.itemAuthors);
    return (
        <div className="AuthorsMain">
            <div className="AuthorsAddAndDuration">
                <AddAuthor />
                <Duration />
            </div>
            <div className="AuthorsListAndDelete" > 
                <label className="CreateCourseLabelsParagraph" >Authors</label>
                <AuthorItem authorName="Dzmitry" />   
                <label className="CreateCourseLabelsParagraph" >Course authors</label>
            </div>
        </div>
    )
}

export default Authors;