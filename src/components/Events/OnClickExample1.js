import React from 'react'

const Basics1 = () => {

  return (

            //onClick Example
    <div className='container'>
      <button
        style={{ color: "white", backgroundColor: "green" }}
        onClick={() => console.log("clicked")}
      >
        Click Me
      </button>
    </div>
  );
}

export default Basics1