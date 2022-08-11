import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const IndividualTask = () => {
  const {id} =useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/todos/?value/${id}`
    )
      .then((res) => res.json())
      .then((response) => setTask(response));
  }, []);
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      { task !== null ? 
        <div>
          id:{task.id} <br />
          title:{task.title}
        </div>
       : null}
    </div>
  );
};

export default IndividualTask;
