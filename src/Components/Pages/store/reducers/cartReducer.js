import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create an async thunk for removing an item from the cart
export const removeItemFromCartAsync = createAsyncThunk(
  "cart/removeItemFromCart",
  async (_id) => {
    try {
      // Make an API call to update the cart on the server
      const apiUrl = `http://localhost:4000/api/v1/product/${_id}`;
      const updatedData = {
        addToCart: false,
      };
      const response = await axios.put(apiUrl, updatedData);

      return _id; // Return the _id of the removed item
    } catch (error) {
      console.error("Error removing item from cart:", error);
      throw error;
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(removeItemFromCartAsync.fulfilled, (state, action) => {
      // Remove the item from the local cartItems state using _id
      return state.filter((item) => item._id !== action.payload);
    });
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
