import React from 'react'
import Food from "./food.jpg";

const FileDownload = () => {

    const style={
        border:"1px solid black",
        margin:"10px",
        borderRadius:"20px",
        imageSize:"cover"
    }

  return (
    <div>
      <center>
        <img style={style} src={Food} alt="Food" width="400px" height="300px" />
        <br />
        <a href={Food} className="btn btn-primary" download="Food" >
          Download
        </a>
      </center>
    </div>
  );
}

export default FileDownload