import React, { useContext } from "react";
import {store} from './ContextApi'

const ComponentB = () => {
    const [data,setData] = useContext(store);
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">{data}</div>
        </div>
      </center>
    </div>
  );
}

export default ComponentB