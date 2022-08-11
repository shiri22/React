import React, { createContext, useState } from "react";
import Count from './Count';
import Display from './Display';

export const store = createContext();
const Cart = () => {
  const [data,setData] = useState([
    {
      model:"Apple"
    },
    {
      model:"Sony"
    },
    {
      model:"Samsung"
    }
  ])
  return (
    <div>
      <center>
        <store.Provider value={[data,setData]}>
          <Count />
          <Display />
        </store.Provider>
      </center>
    </div>
  );
}

export default Cart