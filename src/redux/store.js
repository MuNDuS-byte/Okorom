import { configureStore } from "@reduxjs/toolkit";
import basketSlices from "./slices/basketSlices";

const store = configureStore({
  reducer: {
    basket: basketSlices,
  },
});

export default store;
