import React, { useState, useContext } from "react";
import {store} from "./ContextApi";

const ComponentA = () => {
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
};

export default ComponentA;
