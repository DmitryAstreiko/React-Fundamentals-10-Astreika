import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Inpit';
import '../../../../App.css';
import { useState } from 'react';

function SearchBar(props) {
	const [inputText, setInputText] = useState(null);
	return (
		<div className='SearchBarMain'>
			<div style={{ width: '40%' }}>
				<Input placeholderText='Enter course name...' />
			</div>
			<Button buttonText='Search' />
		</div>
	);
}

export default SearchBar;
