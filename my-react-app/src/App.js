// import logo from './logo.svg';
// import './App.css';
import ClassComponet from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import { useState } from "react";

function App() {
  const company = "Az Groups with me"
  const [name, setName] = useState("Azmath");
  const [dept, setDept] = useState("")

  return (
    <div className="App">
      <header className="App-header">
      <h1> Hi Wolrd, I am from React </h1>
      <ClassComponet /> 
      <FunctionalComponent name = {name} dept = "CS" id = {10} setName = {setName} />
      {/* <FunctionalComponent name = {name} dept = {dept} id = {10}  setDept = {setDept} />  */}
      </header>
    </div>
  );
}

export default App;
