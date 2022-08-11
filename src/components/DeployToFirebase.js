import React, { useState } from "react";
import axios from "axios"

const DeployToFirebase = () => {
  const [data, setData] = useState({
    userName: "",
    email:"",
    password: "",
    confirmPassword: "",
  });
  const { userName,email, password, confirmPassword } = data;

  const handler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if(userName.length<=5){
        alert("userName must be more than 5 characters")
    }
     else if (password !== confirmPassword) {
        console.log("passwords are not matching");
    } else {
      axios.post('https://signup-form-95c37-default-rtdb.firebaseio.com/signup.json',data)
      .then(()=>alert("submitted sccessfully"));
      
    }
  };
  return (
    <div style={{ display: "block", textAlign: "center" }}>
      <form onSubmit={submitHandler}>
        <fieldset>
          <input
            type="text"
            name="userName"
            value={userName}
            placeholder="Enter Your UserName"
            onChange={handler}
          />
          <br></br>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={handler}
          />
          <br></br>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter Your Password"
            onChange={handler}
          />
          <br></br>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Enter Your ConfirmPassword"
            onChange={handler}
          />
          <br></br>
          {password !== confirmPassword ? (
            <p style={{ color: "red" }}>Passwords are not matching</p>
          ) : null}
          <input type="submit" name="submit" />
        </fieldset>
      </form>
    </div>
  );
};

export default DeployToFirebase;
