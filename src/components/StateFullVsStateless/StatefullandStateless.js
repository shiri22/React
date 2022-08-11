import React, { useState } from "react";
import PropsExample from "./PropsExample";

const StatefullandStateless = () => {
    const [count,setCount]=useState(0)

  return (
    <div>
      <center>
        Count:{count} <br/>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </center>
      <PropsExample count={count}/>
    </div>
  );
}

export default StatefullandStateless