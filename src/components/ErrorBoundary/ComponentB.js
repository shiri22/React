import React, { useState } from "react";

const ComponentB = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <center>
        Count:{count}
        <br />
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </center>
    </div>
  );
};


export default ComponentB