import './App.css';
import React, { useState } from "react";
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedAuthorsList, mockedCoursesList } from './constants';

function App() {  
    const [isShowCreateCourse, setIsShowCreateCourse] = useState(false);

    return (
        <div>
            <Header />            
            {isShowCreateCourse ? (
                <CreateCourse itemAuthors={getAuthors()} />
            ) : (

                <Courses items={getItems()} />
            )
            }
        </div>
    );

    function getAuthors() {
    return mockedAuthorsList;
    }

    function getItems() {
        return mockedCoursesList;
    }
}



export default App;
