import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedAuthorsList, mockedCoursesList } from './constants';

function App() {
	const [isShowCreateCourse, setIsShowCreateCourse] = useState(false);
	const [Authors, setAuthors] = useState(getAuthors());
	const [CourcesItem, setCourses] = useState(getCources());
	return (
		<div>
			<Header />
			{isShowCreateCourse ? (
				<CreateCourse
					itemAuthors={getAuthors()}
					changeIsShowCreateCourse={changeIsShowCreateCourse}
				/>
			) : (
				<Courses
					items={CourcesItem}
					itemAuthors={Authors}
					changeIsShowCreateCourse={changeIsShowCreateCourse}
				/>
			)}
		</div>
	);

	function changeIsShowCreateCourse() {
		setIsShowCreateCourse(!isShowCreateCourse);
	}

	function getAuthors() {
		return mockedAuthorsList;
	}

	function getCources() {
		return mockedCoursesList;
	}
}

export default App;
