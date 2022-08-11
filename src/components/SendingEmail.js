import React, { useState } from "react";
import emailjs from "emailjs-com";

const SendingEmail = () => {
  const [data, setData] = useState({
    subject: "",
    email: "",
    message: "",
  });
  const { subject, email, message } = data;
  const handler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  };
  const submit = (e) =>{
   e.preventDefault();
    emailjs
      .sendForm(
        "service_4rb2eb6",
        "template_ol833jf",
        e.target,
        "user_8RAYQFLs6nWjYIyzfxpwf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        });
         e.target.reset();
  
  }
  return (
    <div>
      <center>
        <form onSubmit={submit} autoComplete="off">
          <label>Subject</label><br/>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={handler}
            placeholder="Enter Your Subject"
          />
          <br />
          <label>Email</label><br/>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handler}
            placeholder="Enter Your Email"
          />
          <br />
          <label>Message</label><br/>
          <input
            type="text"
            name="message"
            value={message}
            onChange={handler}
            placeholder="Enter Your Message"
          />
          <br />
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
};

export default SendingEmail;
