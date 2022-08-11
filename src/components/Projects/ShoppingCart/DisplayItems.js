import React, { useContext, useState } from "react";
import { store } from "./AddToCart";

const DisplayItems = () => {
    const [items, setItems] = useContext(store);
    const [data,setData] = useState("")
    const submitHandler= e=>{
        e.preventDefault();
        setItems([...items,{brandName:data}])
    }
  return (
    <>
      <div className="card">
        <div className="card-body">
          {items.map((items) => {
            return (
              <div
                key={items.id}
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  margin: "20px",
                  width: "350px",
                }}
              >
                {items.brandName}
              </div>
            );
          })}
        </div>
      </div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          onChange={(e) => setData(e.target.value)}
          placeholder="enter the brandName"
        />
        <br />
        <input type="submit" value="Add"/>
      </form>
    </>
  );
}

export default DisplayItems