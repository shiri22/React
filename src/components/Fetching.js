import axios from "axios";
import React, { useState, useEffect } from "react";

const Fetching = () => {
  const [data, setData] = useState("");

  // useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then(result=>result.json())
  //     .then(res=>setData(res));
  // }, []);

  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res=>setData(res.data));
  }, []);
  return (
    <div>
      {Array.isArray(data)
        ? data.map((value) => <li key={value.id}>{value.title}</li>)
        : null}
    </div>
  );
}

export default Fetching