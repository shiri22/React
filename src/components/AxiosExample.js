import React, { useEffect, useState } from "react";
import axios from "axios";

const Basics9 = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((result) => setData(result.data));
  }, []);
  return (
    <div>
      {Array.isArray(data)
        ? data.map((item) => <li key={item.id}>{item.title}</li>)
        : null}
    </div>
  );
};

export default Basics9;
