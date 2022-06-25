import React from "react";
import '../../../../App.css';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Inpit';

function AddAuthor(props) {
    return (
        <div className="AddAuthorMain">
            <label className="CreateCourseLabelsParagraph" >Add author</label>
            <label className="CreateCourseLabels">Author name</label>
            <Input placeholderText="Enter author name..." />
            <div style={{ textAlign: "center" }}>
                <Button buttonText="Create author" />
            </div>
        </div>
    )
}

export default AddAuthor;