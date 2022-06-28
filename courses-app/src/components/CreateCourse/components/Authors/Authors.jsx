import React, { useState, useEffect } from 'react';
import '../../../../App.css';
import AddAuthor from '../AddAuthor/AddAuthor';
import Duration from '../Duration/Duration';
import AuthorItem from '../AuthorItem/AuthorItem';

function Authors(props) {
	const [allAuthors, setAuthors] = useState(props.itemsAuthors);
	const [selectedAuthors, setSelectedAuthors] = useState([]);
	const [abilityAuthors, setAbilityAuthors] = useState(props.itemsAuthors);

	useEffect(() => {
		setAuthors(props.itemsAuthors);

		let tempAuthors = [];
		tempAuthors.push(...allAuthors);
		setAbilityAuthors(tempAuthors);
	}, [props.itemsAuthors, allAuthors]);

	return (
		<div className='AuthorsMain'>
			<div className='AuthorsAddAndDuration'>
				<AddAuthor itemsAuthors={allAuthors} onAddAuthors={onAddAuthor} />
				<Duration />
			</div>
			<div className='AuthorsListAndDelete'>
				<label className='CreateCourseLabelsParagraph'>Authors</label>
				{abilityAuthors?.map((item) => (
					<AuthorItem
						id={item.id}
						AuthorName={item.name}
						ButtonName='Add author'
						onButtonPress={onAddAuthorToList}
					/>
				))}
				<label className='CreateCourseLabelsParagraph'>Course authors</label>
				{selectedAuthors?.map((item) => (
					<AuthorItem AuthorName={item.name} ButtonName='Add author' />
				))}
			</div>
		</div>
	);

	function onAddAuthorToList(id) {
		let tempSelectedAuthors = [];
		if (allAuthors) {
			allAuthors?.forEach((element) => {
				var foundId = element.id.toLowerCase().indexOf(id, 0);
				if (foundId > -1) {
					tempSelectedAuthors.push(element);
				}
			});
		}

		setSelectedAuthors(tempSelectedAuthors);
	}

	function onAddAuthor(value) {
		props.AddAuthor(value);
	}
}

export default Authors;
