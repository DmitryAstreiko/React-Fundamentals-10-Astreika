import React from "react";
import '../../App.css';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from "../../common/Button/Button";

function Courses(props) {
    return (
        <div className="CoursesMain">
            <div>
                <SearchBar />
                <Button buttonText="Add new course" />
            </div>
            <CourseCard />            
        </div>
        )
}

export default Courses;