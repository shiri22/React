import React from 'react'
import {content} from "./UseContextExample";

const ComponentC = () => {
  return (
    <div>
      <content.Consumer>{(value) => <h1>{value}</h1>}</content.Consumer>
    </div>
  );
}

export default ComponentC