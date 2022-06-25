import React from "react";
import '../../../../App.css';
import Input from '../../../../common/Input/Inpit';

function Duration(props) {
    return (
        <div className="DurationMain">
            <label className="CreateCourseLabelsParagraph">Duration</label>
            <label className="CreateCourseLabels">Duration</label>
            <Input placeholderText="Enter duration minutes..." />
            <label>Duration: <b>00:00</b> hours</label>
        </div>
    )
}

export default Duration;