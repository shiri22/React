import React, { useState, useEffect } from "react";

const ComponentA = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 5) {
      throw new Error("App Crashed");
    }
    console.log("executed");
  }, [count]);
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

export default ComponentA