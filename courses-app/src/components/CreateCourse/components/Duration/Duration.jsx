import React, { useState } from 'react';
import '../../../../App.css';
import Input from '../../../../common/Input/Inpit';
import GetCourseDuration from '../../../../helpers/getCourseDuration';

function Duration() {
	const [duration, setDuration] = useState('00:00 hour');
	return (
		<div className='DurationMain'>
			<label className='CreateCourseLabelsParagraph'>
				<b>Duration</b>
			</label>
			<label className='CreateCourseLabels'>Duration</label>
			<Input
				placeholderText='Enter duration minutes...'
				onChange={onInputText}
			/>
			<label className='CreateCourseDuration'>Duration: {duration}</label>
		</div>
	);

	function onInputText(text) {
		//const isInteger = /^[0-9]+$/;
		//if (text === '' || isInteger.test(text)) {
		setDuration(GetCourseDuration(text));
		//}

		if (!text) {
			setDuration('00:00 hour');
		}
	}
}

export default Duration;
