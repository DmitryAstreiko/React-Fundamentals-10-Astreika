import React, { useState } from "react";
import '../../App.css';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from "../../common/Button/Button";
import getCourseDuration from '../../helpers/getCourseDuration';

function Courses(props) {
    return (
        <div className="CoursesMain">
            <div className="CoursesSearchAddCourse">
                <SearchBar />
                <div>
                    <Button buttonText="Add new course" />
                </div>
            </div>
            {props.items.map((item, index) =>
                <CourseCard id={item.id} title={item.title} description={item.description} authors={item.authors} duration={getCourseDuration(item.duration)} created={item.creationDate} />
            )}
                        
        </div>
    )
}

export default Courses;