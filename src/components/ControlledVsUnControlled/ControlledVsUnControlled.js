import React, { useState } from "react";
import Controlling from "./Controlling";

const ControlledVsUnControlled = () => {
  const [name, setName] = useState("");
  const handler = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <center>
        Name : {name}
        <br />
        <input type="text" on placeholder="Enter Name" onChange={handler} />
        <Controlling handler={handler} />
      </center>
    </div>
  );
};

export default ControlledVsUnControlled;
