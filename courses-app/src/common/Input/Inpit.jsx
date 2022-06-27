import React, { useState } from 'react';
import '../../App.css';

function Input(props) {
	const [inputValue, setInputValue] = useState('');
	return (
		<div className='InputMain'>
			<input
				id='search'
				className='Inputs'
				value={inputValue}
				placeholder={props.placeholderText}
				//onChange={(event) => setInputValue(event.target.value)}
				onChange={(event) => onHandleClick(event.target.value)}
			/>
			<label for='search'>{props.labelText}</label>
		</div>
	);

	function onHandleClick(symbols) {
		console.log('symbols >> ' + symbols);
		setInputValue(symbols);
		props.onChange(symbols);
	}
}

export default Input;
