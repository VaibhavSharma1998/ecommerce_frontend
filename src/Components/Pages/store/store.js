import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk"; // Import Redux Thunk
import cartReducer from './reducers/cartReducer'

const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
    middleware: [thunk], // Apply Redux Thunk middleware
  });
  
  export default store;