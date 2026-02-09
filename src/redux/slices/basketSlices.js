import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const basketSlices = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      state.push(action.payload);
    },
    deleteBasket: (state, action) => {
      return state.filter((basket) => {
        return basket.slug !== action.payload;
      });
    },
    toggleCount: (state, action) => {
      return state.forEach((basket) => {
        if (basket.slug === action.payload.slug) {
          return action.payload.bool
            ? (basket.count += 1)
            : (basket.count -= 1);
        }
      });
    },
  },
});

export const { addBasket, deleteBasket, toggleCount } = basketSlices.actions;

export const selectBasket = (state) => state.basket;

export default basketSlices.reducer;
