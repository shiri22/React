import React from "react";

const Basics6 = () => {
  const names = ["shirisha", "shiva", "chinnareddy", "jyothi"];

  const filtered= names.filter(name=>name.includes("s"))
  //Filter Example

  return (
    <div>
      {filtered.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </div>
  );
};

export default Basics6;
