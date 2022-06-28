import React, { useState } from 'react';
import '../../App.css';
import Button from '../../common/Button/Button';
import Authors from './components/Authors/Authors';
import Input from '../../common/Input/Inpit';

function CreateCourse(props) {
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
				minLength='2'
				className='CreateCourseTextArea'
				placeholder='Enter description'
			></textarea>
			<Authors itemsAuthors={props.itemAuthors} AddAuthor={addAuthors} />
		</div>
	);

	function addAuthors(value) {
		props.addNewAuthors(value);
	}

	function changeShowCreateCourse() {
		props.changeIsShowCreateCourse();
	}
}

export default CreateCourse;
