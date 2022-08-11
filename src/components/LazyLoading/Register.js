import React, { useState } from "react";
import './LazyLoading.css'

const Register = () => {
  const [data, setData] = useState({
    userName: "",
    password: "",
    confirmPassword:""
  });
  const { userName, password,confirmPassword } = data;

  const handler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <center>
        <h1>Register</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter UserName"
            value={userName}
            name="userName"
            onChange={handler}
          />
          <br />
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Enter Password"
            onChange={handler}
          />
          <br />
          <input
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            placeholder="Enter Confirm Password"
            onChange={handler}
          />
          <br />
          {password !== confirmPassword ? <p style={{color:"red"}}>Password Mismatched</p> : null}
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
};

export default Register