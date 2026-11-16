import { createSlice } from "@reduxjs/toolkit";

export const MIN_COUNT = 1;
export const MAX_COUNT = 14;

const initialState = [];

const basketSlices = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      if (state.some((basket) => basket.slug === action.payload.slug)) return;
      state.push(action.payload);
    },
    deleteBasket: (state, action) => {
      return state.filter((basket) => basket.slug !== action.payload);
    },
    toggleCount: (state, action) => {
      const basket = state.find((item) => item.slug === action.payload.slug);
      if (!basket) return;
      const next = basket.count + (action.payload.bool ? 1 : -1);
      if (next < MIN_COUNT || next > MAX_COUNT) return;
      basket.count = next;
    },
    clearBasket: () => [],
  },
});

export const { addBasket, deleteBasket, toggleCount, clearBasket } =
  basketSlices.actions;

export const getUnitPrice = (item) => parseInt(item.salePrice || item.price, 10);

export const selectBasket = (state) => state.basket;

export const selectBasketTotal = (state) =>
  state.basket.reduce(
    (sum, el) => sum + parseInt(el.salePrice || el.price) * el.count,
    0
  );

export default basketSlices.reducer;
