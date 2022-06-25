import React from "react";
import '../../App.css';
import Button from '../../common/Button/Button';
import Authors from './components/Authors/Authors';

function CreateCourse(props) {
    return (
        <div className="CreateCourseMain">
            <label className="CreateCourseLabels">Title</label>
            <div>                
                <input className="InputCreateCourseName" id="inputCreateCourseName" placeholder="Enter title..." />
                <Button buttonText="Cancel adding" />
                <Button buttonText="Create course" />
            </div>
            <label className="CreateCourseLabels">Description</label>
            <textarea className="CreateCourseTextArea" placeholder="Enter description"></textarea>
            <Authors />
        </div>
    )
}

export default CreateCourse;