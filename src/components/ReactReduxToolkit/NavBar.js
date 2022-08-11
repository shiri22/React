import React from "react";

import { useSelector } from "react-redux";

const NavBar = () => {
  const cartCount = useSelector((state) => state.CartReducer.cartValues.length);
  const totalPrices = useSelector((state) => state.CartReducer.totalPrice);
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <div className="d-inline p-2 navbar-nav mx-auto">
          <span className="btn btn-primary">Cart Items: {cartCount} </span>
          &nbsp;
          <span className="btn btn-primary">Total Price : {totalPrices} </span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
