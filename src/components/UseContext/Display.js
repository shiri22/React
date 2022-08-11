import React, { useContext, useState } from "react";
import { store } from "./Cart";
const Display = () => {
  const [data, setData] = useContext(store);
  const [item,setItems] = useState('')
  const handler=e=>{
    setItems(e.target.value)
  }
  const submitHandler= e=>{
    e.preventDefault();
    setData([...data,{model:item}])
  }
  return (
    <>
      <div>
        {data.map((item) => {
          return <div className="card-title">{item.model}</div>;
        })}
      </div>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter Model" onChange={handler}/>
            <input type="submit" value="Add"/>
        </form>
    </>
  );
};

export default Display;
