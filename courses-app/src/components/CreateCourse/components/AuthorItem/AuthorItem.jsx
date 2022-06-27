import React from 'react';
import '../../../../App.css';
import Button from '../../../../common/Button/Button';

function AuthorItem(props) {
	return (
		<div className='AuthorItemMain'>
			<label>{props.AuthorName}</label>
			<Button buttonText={props.ButtonName} />
		</div>
	);
}

export default AuthorItem;
