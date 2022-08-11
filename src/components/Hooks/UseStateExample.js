import React, { useState } from "react";
import "../App.css";

const Basics = () => {

    //useState Example
  const [name, setName] = useState("shiri");

  const styling = {
    color: "white",
    backgroundColor: "black",
  };

  return (
    <div className="container">
      <h1 style={styling}>hello {name}</h1>
    </div>
  );
};

export default Basics;
