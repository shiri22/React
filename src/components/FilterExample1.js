import React from "react";

const Basics7 = () => {
  const values = ["10", "20", "30", "40", "50"];
  const filters = values.filter((value) => value > 10);
  return (
    <div>
      {filters.map((item) => (
        <li>{item}</li>
      ))}
    </div>
  );
};

export default Basics7;
