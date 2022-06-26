import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedAuthorsList } from './constants';

function App(props) {  
    //const [isShowAddCourse, setIsShowAddCourse] = useState(false);
    return (
        <div>
            <Header />
            <Courses items={props.items} />
            <CreateCourse itemAuthors={getAuthors()}/>         
        </div>
    );

    function getAuthors() {
    return mockedAuthorsList;
    }
}



export default App;
