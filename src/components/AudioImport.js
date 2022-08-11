import React from "react";
import Audio from "./t.ogg";

const AudioImport = () => {
  return (
    <div style={{display:"felx",justifyContent:"center",textAlign:"center",marginTop:"100px"}}>
      <audio controls>
        <source src={Audio}  type="audio/ogg"/>
      </audio>
    </div>
  );
};

export default AudioImport;
