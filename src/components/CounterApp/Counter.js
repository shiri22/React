
import React, { useState } from "react";
import "./Counter.css"

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
      //onClick function Example

  <div className="container">
    <h1>{count}</h1>
    <br></br>
    <button className="btn" onClick={()=>setCount(count+1)}>Increment</button>
    <button className="btn" onClick={()=>setCount(count-1)}>Decrement</button>
  </div>
  );
};

export default Counter;
