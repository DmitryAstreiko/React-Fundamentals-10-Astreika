import './App.css';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedAuthorsList, mockedCoursesList } from './constants';

function App() {
	const [isShowCreateCourse, setIsShowCreateCourse] = useState(false);
	const [authors, setAuthors] = useState(getAuthors());
	const [coursesItem, setCoursesItem] = useState(getCources());
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
					items={coursesItem}
					itemAuthors={authors}
					changeIsShowCreateCourse={changeIsShowCreateCourse}
					onSearchCourses={onSearchCourses}
				/>
			)}
		</div>
	);

	function onSearchCourses(text) {
		console.log('onSearchCourses + ' + text);
		var resArray = [];
		const mockedCourses = getCources();

		if (mockedCourses) {
			mockedCourses?.forEach((element) => {
				var foundTitle = element.title.toLowerCase().indexOf(text, 0);
				var foundId = element.id.toLowerCase().indexOf(text, 0);
				if (foundTitle > 0 || foundId > 0) {
					resArray.push(element);
				}
			});
		}

		console.log(resArray);
		console.log(mockedCourses);
		if (resArray.length > 0) {
			console.log('2');
			setCoursesItem(resArray);
		} else {
			console.log('3');
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
