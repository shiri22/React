import React, { useRef } from "react";

const UnControlled =() => {
    const userRef = useRef();

    const submitHandler = e=>{
        e.preventDefault();
        alert(userRef.current.value)
    }
    return (
      <div>
        <center>
          <form onSubmit={submitHandler}>
            <input type="text" ref={userRef} placeholder="Enter the Text" />
            <input type="submit" />
          </form>
        </center>
      </div>
    );
}

export default UnControlled