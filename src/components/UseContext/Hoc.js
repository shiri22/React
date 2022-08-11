import React, { useState } from "react";

const Hoc = (Cart) => {
    const [auth,setAuth] = useState(true)
  return (
    <div>
        {auth ? <Cart /> : <p>Hello</p>}
    </div>
  )
}

export default Hoc