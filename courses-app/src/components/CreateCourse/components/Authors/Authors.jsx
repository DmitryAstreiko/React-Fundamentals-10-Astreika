import React, { useState } from 'react';
import '../../../../App.css';
import AddAuthor from '../AddAuthor/AddAuthor';
import Duration from '../Duration/Duration';
import AuthorItem from '../AuthorItem/AuthorItem';

function Authors(props) {
	const [Authors, setAuthors] = useState(null);
	return (
		<div className='AuthorsMain'>
			<div className='AuthorsAddAndDuration'>
				<AddAuthor
					itemsAuthors={props.itemsAuthors}
					onAddAuthors={onAddAuthor}
				/>
				<Duration />
			</div>
			<div className='AuthorsListAndDelete'>
				<label className='CreateCourseLabelsParagraph'>Authors</label>
				{props.itemsAuthors?.map((item) => (
					<AuthorItem AuthorName={item.name} ButtonName='Add author' />
				))}
				<label className='CreateCourseLabelsParagraph'>Course authors</label>
			</div>
		</div>
	);

	function onAddAuthor(value) {
		props.AddAuthor(value);
	}
}

export default Authors;
