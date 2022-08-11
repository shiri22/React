import React, { useContext } from "react";
import {store} from './AddToCart';

const ItemsCount = () => {
    const [items,setItems] = useContext(store);
  return (
    <div className="card">
      <div className="card-body">
        Count: {items.length}
      </div>
    </div>
  );
}

export default ItemsCount