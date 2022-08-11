import React, { useState } from "react";
import "../../App.css"

const Display = () => {
  const [data, setData] = useState({
    userName: '',
    password: '',
  });

  const { userName, password } = data;

  const handler = e => {
    setData({...data,[e.target.name]:e.target.value})}

    //onSubmit submit the data to backend
  const submitHandler = e => {
  e.preventDefault();
  console.log(data);
  }
  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter the UserName"
          name="userName"
          value={userName}
          onChange={handler}
        />
        <br></br>
        <input
          type="password"
          placeholder="Enter the Password"
          name="password"
          value={password}
          onChange={handler}
        />
        <br></br>
        <input type="submit" name="submit" />
      </form>
    </div>
  );
};

export default Display;
