import React, { useEffect, useState } from "react";

const Basics8 = () => {
  const [data, setData] = useState("");

      //Fetch Examle
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);
  console.log(data)
  return (
    <div>
      {Array.isArray(data)
        ? data.map((item) => <li key={item.id}>{item.title}</li>)
        : null}
    </div>
  );
};

export default Basics8;
