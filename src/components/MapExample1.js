import React from "react";

const Basics4 = () => {
  const arr = ["React JS","Angular","VueJS"];
  return (
    <div>
      {arr.map((value, index) => (
        <ul>
          <li key={index}>{value}</li>
        </ul>
      ))}
    </div>
  );
};

export default Basics4;
