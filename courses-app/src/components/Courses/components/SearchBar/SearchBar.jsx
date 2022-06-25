import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Inpit";
import '../../../../App.css';

function SearchBar() {
    return (
        <div className="SearchBarMain">
          
                <Input placeholderText="Enter course name..."/>
          
                <Button buttonText="Search" />
          
        </div>
    )
}

export default SearchBar;