import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';


function App(props) {
  return (
    <div>
          <Header />
          <Courses items={props.items} />
    </div>
  );

 
}



export default App;
