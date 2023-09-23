// store/reducers/cartReducer.js

import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
  
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      // Add the product to the cart
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      // Remove the product from the cart by its ID
      return state.filter((item) => item._id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
