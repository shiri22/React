import React from 'react'
import {useFormik} from 'formik'

const Formik = () => {
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:""
        },
        onSubmit:(values)=>{
            console.log(values)
            // To submit to backnd
            // axios.post("")
        },
        validate:(values)=>{
            let errors= {};
            if(!values.name){
            errors.name="Name Required"
            }
             else if (!values.email) {
               errors.email = "Email Required";
             }
               else if (!values.password) {
                errors.password = "Password Required";
              }
              return errors
        }
    })
    
  return (
    <div>
      <center>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name ? (
            <div style={{ color: "red" }}>{formik.errors.name}</div>
          ) : null}
          <br />
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
          <br />
          <button>Submit</button>
        </form>
      </center>
    </div>
  );
}

export default Formik