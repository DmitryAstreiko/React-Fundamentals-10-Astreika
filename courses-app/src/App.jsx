import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';

function App(props) {
  return (
    <div>
          <Header />
          <Courses items={props.items} />
          <CreateCourse />         
    </div>
  );

 
}



export default App;
