import React, { createContext, useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

export  const store = createContext()

const ContextApi = () => {
    const [data, setData] = useState(0);
  return (
    <div>
      <center>
        <store.Provider value={[data, setData]}>
          <ComponentA />
          <ComponentB />
          <button className="btn btn-primary" onClick={() => setData(data + 1)}>
            Increment
          </button>
        </store.Provider>
      </center>
    </div>
  );
}

export default ContextApi