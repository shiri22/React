import axios from "axios";
import React, { useState,useEffect } from "react";

const AyncExample = () => {
    const [data,setData] = useState("")
  

  useEffect( ()=>{
   (async() => {const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
   setData(response.data)} ) ();
},[]);

  return <div>
    {
        Array.isArray(data)?
        data.map((item,index)=>
            <li key={item.id}>{item.title}</li>)
            :null
    }
  </div>;
};

export default AyncExample;
