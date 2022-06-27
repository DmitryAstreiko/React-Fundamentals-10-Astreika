import React, { useState } from 'react';
import '../../../../App.css';
import AddAuthor from '../AddAuthor/AddAuthor';
import Duration from '../Duration/Duration';
import AuthorItem from '../AuthorItem/AuthorItem';

function Authors(props) {
	const [itemsAuthors, setItems] = useState(props.itemsAuthors);
	console.log('itemsAuthors' + itemsAuthors);
	return (
		<div className='AuthorsMain'>
			<div className='AuthorsAddAndDuration'>
				<AddAuthor itemsAuthors={itemsAuthors} />
				<Duration />
			</div>
			<div className='AuthorsListAndDelete'>
				<label className='CreateCourseLabelsParagraph'>Authors</label>
				{itemsAuthors?.map((item) => (
					<AuthorItem AuthorName={item.name} ButtonName='Add author' />
				))}
				<label className='CreateCourseLabelsParagraph'>Course authors</label>
			</div>
		</div>
	);
}

export default Authors;
