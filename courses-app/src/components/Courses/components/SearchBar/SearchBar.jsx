import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Inpit';
import '../../../../App.css';

function SearchBar() {
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
