import React, { useState } from "react";

const Login = () => {
    const [form,setForm] =useState({
        email:"",
        password:""
    })
    const[data,setData] = useState("")
    const {email,password} = form;

    const handler= e=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const submitHandler= e=>{
        e.ppreventDefault();
        setData(form);
        console.log(data)
    }

  return (
    <div>
      <center>
        <form autoComplete="off" onSubmit={submitHandler}>
          <h3>Authentication</h3>
          <input
            type="text"
            name="email"
            value={email}
            required
            onChange={handler}
            placeholder="Enter Your Email"
          />
          <br />
          <input
            type="password"
            required
            name="password"
            onChange={handler}
            value={password}
            placeholder="Enter Your Password"
          />
          <br />
          <input type="submit" 
          name="submit"
          value="SignIn" /> &nbsp;
          {/* <input type="submit" value="SignUp" /> */}
        </form>
      </center>
    </div>
  );
}

export default Login