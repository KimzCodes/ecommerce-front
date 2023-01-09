import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = { items: {}, reachToMax: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    closeReachToMax(state) {
      state.reachToMax = false;
    },
    changeQuantity(state, action) {
      const { id, quantity } = action.payload;
      state.items[id] = quantity;
    },
    addToCart(state, action) {
      const id = action.payload.id;
      const max = action.payload.max;
      if (state.items[id] === max) {
        state.reachToMax = true;
      } else {
        if (state.reachToMax) {
          state.reachToMax = false;
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

export const { closeReachToMax, addToCart, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
