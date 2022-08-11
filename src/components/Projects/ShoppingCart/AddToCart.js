import React, { createContext, useState } from "react";
import ItemsCount from "./ItemsCount";
import DisplayItems from "./DisplayItems";

export const store = createContext();

const AddToCart = () => {
    const [items,setItems]= useState([
        {
            brandName:"Apple"
        },
        {
            brandName:"Vivo"
        },
        {
            brandName:"Sony"
        },
        {
            brandName:"Oppo"
        },
        {
            brandName:"Samsung"
        }
    ]);
  return (
    <div>
      <center>
        <store.Provider value={[items,setItems]}>
          <ItemsCount />
          <DisplayItems />
        </store.Provider>
      </center>
    </div>
  );
}

export default AddToCart