import React from "react";
import { useState } from "react";

const FunctionalComponent = (props) => {
    const [count, setCount] = useState(0);
    const subtract = () => setCount(count - 1)
    return(
        <div>
            <p> Funcitonal Component</p>
            <button onClick={() => setCount(count + 1)}>Click on me to add +1 </button>
            {/* <button onClick={() => setCount(count - 1)}>Click on me to subtract -1 </button> */}
            <button onClick={subtract}>Click on me to subtract -1 </button>
         <h1>{count}</h1>
         <h2>My name is {props.name}, I am from {props.dept} dept and my ID is {props.id}</h2>
        </div>
    )
}

export default FunctionalComponent;