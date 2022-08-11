import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    userName: "",
    password: "",
  });
  const { userName, password } = data;

  const handler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div style={{ display: "block", textAlign: "center" }}>
      <form onSubmit={submitHandler}>
        <fieldset>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={userName}
            name="userName"
            onChange={handler}
          />
          <br></br>
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            name="password"
            onChange={handler}
          />
          <br></br>
          <input type="submit" name="submit" />
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
