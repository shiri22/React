import React, { useContext } from "react";
import {store} from './Cart'

const Count = () => {
    const [data,setData] = useContext(store);
  return (
    <div className="card">
        <div className="card-body">
            Count : {data.length}
        </div>
    </div>
  )
}

export default Count