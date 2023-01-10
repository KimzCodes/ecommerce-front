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
    removeItem(state, action) {
      const id = action.payload;
      delete state.items[id];
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

export const totalCartPrice = createSelector(
  (state) => state.cart.items,
  (state) => state.products.records,
  (items, records) => {
    let price = 0;
    for (const record of records) {
      price = price + record.price * items[record.id];
    }

    return price.toFixed(2);
  }
);

export const { closeReachToMax, addToCart, changeQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
