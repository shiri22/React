import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartValues: [],
  totalPrice: 0,
};

const CartReducer = createSlice({
  name: "CartReducer",
  initialState,
  reducers: {
    IncrementCart: (state, action) => {
      state.cartValues.push(action.payload);
      const pricearray = state.cartValues.map((obj) => obj.productPrice);
      state.totalPrice = pricearray.reduce((a, b) => a + b);
    },
    DecrementCart: (state, action) => {
      const index = state.cartValues.findIndex(
        (obj) => obj.productName === action.payload.productName
      );
      if (index > -1) {
        state.cartValues.splice(index, 1);
      }

      const pricearray = state.cartValues.map((obj) => obj.productPrice);
      state.totalPrice = pricearray.reduce((a, b) => a + b);
    },
  },
});
export const { IncrementCart, DecrementCart } = CartReducer.actions;
export default CartReducer.reducer;
