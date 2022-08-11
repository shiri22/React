import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    userName:"",
    password:""
  });
  const {userName,password} = data;

  const handler= e => {
        setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler= e => {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div style={{marginTop:"50px"}}>
      <center>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="Enter UserName" value={userName} name="userName" onChange={handler}/>
          <br />
          <input type="password" value={password} name="password" placeholder="Enter Password" onChange={handler}/>
          <br />
          <input type="submit" name="submit"/>
        </form>
      </center>
    </div>
  );
};

export default Login;
