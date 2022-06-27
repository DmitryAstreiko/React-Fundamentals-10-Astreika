import React, { useState } from 'react';
import '../../../../App.css';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Inpit';
import { v4 as uuid } from 'uuid';

function AddAuthor(props) {
	const [nameAuthor, setnameAuthor] = useState(null);
	return (
		<div className='AddAuthorMain'>
			<label className='CreateCourseLabelsParagraph'>Add author</label>
			<label className='CreateCourseLabels'>Author name</label>
			<Input
				placeholderText='Enter author name...'
				onChange={onInputText}
				needClear='true'
			/>
			<div style={{ textAlign: 'center' }}>
				<Button buttonText='Create author' onButtonPress={addAuthor} />
			</div>
		</div>
	);

	function addAuthor() {
		console.log('nameAuthor + ' + nameAuthor);

		props.itemsAuthors.push({ id: uuid(), name: { nameAuthor } });

		console.log(props.itemsAuthors);
	}

	function onInputText(name) {
		setnameAuthor(name);
	}
}

export default AddAuthor;
