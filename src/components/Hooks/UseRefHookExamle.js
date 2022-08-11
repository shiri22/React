import React, { useRef, useEffect } from "react";

const UseRefHookExamle = () => {
  const data = useRef(null);

  useEffect(() => {
    data.current.focus();
  }, []);
  
  const submit = (e) => {
    e.preventDefault();
    if (data.current.value !== null) {
        data.current.value = "shirisha";
      console.log(data.current.value);
      
    } else {
      console.log("null");
    }
  };
  return (
    <div>
      <form onSubmit={submit}>
        <center>
          <input ref={data} type="text" placeholder="Enter Your Name" />
          <br />
          <input type="submit" />
        </center>
      </form>
    </div>
  );
};

export default UseRefHookExamle;
