import React, { useRef, useEffect } from "react";
import Data from "./components/Data.json";

const Exam2 = () => {
 const search = useRef('')
const dates=search.current.value!== '' ? search.current.value : null;
useEffect(() => {
    search.current.focus()
}, []);
  return (
    <div>
      <center>
        <input ref={search} type="text" placeholder="enter your text" />
        <br />
        {console.log(dates)}
        {Data.filter((item) =>
          item.city.toLocaleLowerCase().includes(dates?.toLocaleLowerCase())
        ).map((item) => {
          return (
            <div
              key={item.id}
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "20px",
                width: "400px",
              }}
            >
              {item.city}
            </div>
          );
        })}
      </center>
    </div>
  );
};

export default Exam2;
