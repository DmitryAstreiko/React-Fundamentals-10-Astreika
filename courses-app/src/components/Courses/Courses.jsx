import React from "react";
import '../../App.css';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from "../../common/Button/Button";

function Courses(props) {
    
    return (
        <div className="CoursesMain">
            <div className="CoursesSearchAddCourse">
                <SearchBar />
                <div>
                    <Button buttonText="Add new course" />
                </div>
            </div>
            {props.items((item, index) =>
                <CourseCard id={item.id} title={item.title} description={item.description} authors={item.authors} duration={item.duration} created={item.created}/>
                )}
                        
        </div>
    )
}

export default Courses;