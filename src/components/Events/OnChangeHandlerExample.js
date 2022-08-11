import React, { useState } from "react";
import "../../App.css";

const Basics3 = () => {
  const [user, setUser] = useState("");

  //onChange handler handles the user input and store it into a variable
  const handler = (e) => {
    setUser(e.target.value);
  };
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter Your UserName"
        value={user}
        onChange={handler}
      />
      <br></br>
      <h1>{user}</h1>
    </div>
  );
};

export default Basics3;
