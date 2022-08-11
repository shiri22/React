import React from 'react'

const Controlling = (props) => {
  return (
    <div>
        <center>
            <input type="text" placeholder='Enter Name' onChange={props.handler}/>
            </center>
    </div>
  )
}

export default Controlling