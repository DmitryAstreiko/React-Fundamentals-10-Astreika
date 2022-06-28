import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedAuthorsList, mockedCoursesList } from './constants';
import { v4 as uuid } from 'uuid';

function App() {
	const [isShowCreateCourse, setIsShowCreateCourse] = useState(false);
	const [authors, setAuthors] = useState(getAuthors());
	const [coursesItem, setCoursesItem] = useState(getCources());
	return (
		<div>
			<Header />
			{isShowCreateCourse ? (
				<CreateCourse
					itemAuthors={authors}
					changeIsShowCreateCourse={changeIsShowCreateCourse}
					addNewAuthors={addNewAuthors}
				/>
			) : (
				<Courses
					items={coursesItem}
					itemAuthors={authors}
					changeIsShowCreateCourse={changeIsShowCreateCourse}
					onSearchCourses={onSearchCourses}
				/>
			)}
		</div>
	);

	function addNewAuthors(text) {
		var tempAuthors = [];
		tempAuthors.push(...authors);
		tempAuthors.push({ id: uuid(), name: text });
		setAuthors(tempAuthors);
	}

	function onSearchCourses(text) {
		var resArray = [];
		const mockedCourses = getCources();
		if (mockedCourses) {
			mockedCourses?.forEach((element) => {
				var foundTitle = element.title.toLowerCase().indexOf(text, 0);
				var foundId = element.id.toLowerCase().indexOf(text, 0);
				if (foundTitle > -1 || foundId > -1) {
					resArray.push(element);
				}
			});
		}

		if (resArray.length > 0) {
			setCoursesItem(resArray);
			setCoursesItem(mockedCourses);
		}
	}

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
