import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Task = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((response) => setData(response));
  }, []);
  return (
    <div>
      {Array.isArray(data)
        ? data.map((value) => {
            return (
              <div
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <Link to={`/task/${value.id}`}>{value.title}</Link>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Task;
