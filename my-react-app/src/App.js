// import logo from './logo.svg';
// import './App.css';
import ClassComponet from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Hi Wolrd, I am from React </h1>
      <ClassComponet /> 
      <FunctionalComponent name = "Azmath" dept = "CS" id = {10} />
     </header>
    </div>
  );
}

export default App;
