import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "../features/cart";

const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});

export default store;
