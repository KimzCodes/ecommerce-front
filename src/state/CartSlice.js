import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = { items: {}, reachedToMax: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    closeReachToMax(state) {
      state.reachedToMax = false;
    },
    addToCart(state, action) {
      const id = action.payload.id;
      const max = action.payload.max;
      if (state.items[id] === max) {
        state.reachedToMax = true;
      } else {
        if (state.reachedToMax) {
          state.reachedToMax = false;
        }

        if (state.items[id]) {
          state.items[id]++;
        } else {
          state.items[id] = 1;
        }
      }
    },
  },
});

export const totalCartQuantity = createSelector(
  (state) => state.cart.items,
  (items) => {
    let totalQuantity = 0;

    for (const id in items) {
      totalQuantity += items[id];
    }
    return totalQuantity;
  }
);

export const { closeReachToMax } = cartSlice.actions;

export default cartSlice.reducer;
