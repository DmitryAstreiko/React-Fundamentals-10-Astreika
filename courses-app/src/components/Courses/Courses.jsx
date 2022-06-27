import React, { useState } from 'react';
import '../../App.css';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';
import GetCourseDuration from '../../helpers/getCourseDuration';
import FormatCreationDate from '../../helpers/formatCreationDate';

function Courses(props) {
	const [itemCources] = useState(props.items);
	const [itemAuthors] = useState(props.itemAuthors);
	return (
		<div className='CoursesMain'>
			<div className='CoursesSearchAddCourse'>
				<SearchBar />S
				<div>
					<Button buttonText='Add new course' />
				</div>
			</div>
			{itemCources.map((item, index) => (
				<CourseCard
					id={item.id}
					title={item.title}
					description={item.description}
					authors={getAuthorsByIds(item.authors)}
					duration={GetCourseDuration(item.duration)}
					created={FormatCreationDate(item.creationDate)}
				/>
			))}
		</div>
	);

	function getAuthorsByIds(arrayAuthors) {
		debugger;

		for (let author of arrayAuthors) {
			console.log(author);
		}

		/*for (var i = 0; arrayAuthors.length - 1; i++) {
            
            var www = arrayAuthors[i];
            var sss = itemAuthors.find(el => el.id == www);
            console.log('sss = ' + sss)
        }*/
	}
}

export default Courses;
