import React, { useState } from 'react';
import '../../App.css';
import Button from '../../common/Button/Button';
import Authors from './components/Authors/Authors';
import Input from '../../common/Input/Inpit';

function CreateCourse(props) {
	console.log('CreateCourse = ' + props.itemAuthors);
	return (
		<div className='CreateCourseMain'>
			<label className='CreateCourseLabels'>Title</label>
			<div className='CreateCourseTitle'>
				<Input placeholderText='Enter title...' />
				<div className='CreateCourseButtons'>
					<Button
						buttonText='Cancel adding'
						onButtonPress={changeShowCreateCourse}
					/>
					<Button buttonText='Create course' />
				</div>
			</div>
			<label className='CreateCourseLabels'>Description</label>
			<textarea
				className='CreateCourseTextArea'
				placeholder='Enter description'
			></textarea>
			<Authors itemsAuthors={props.itemAuthors} />
		</div>
	);

	function changeShowCreateCourse() {
		props.changeIsShowCreateCourse();
	}
}

export default CreateCourse;
