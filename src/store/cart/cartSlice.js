import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getRecordsByCartItems } from "./asyncThunk";
import initialState from "./initialState";

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

export const cartTotalQuantity = createSelector(
  (state) => state.cart.items,
  (items) => {
    let totalQuantity = 0;

    for (const id in items) {
      totalQuantity += items[id];
    }
    return totalQuantity;
  }
);

export const cartTotalPrice = createSelector(
  (state) => state.cart.items,
  (_, records) => records,
  (items, records) => {
    let price = 0;
    for (const record of records) {
      price += record.price * items[record.id];
    }
    return price.toFixed(2);
  }
);

export const itemQuantityById = createSelector(
  (state) => state.cart.items,
  (_, id) => id,
  (items, id) => {
    return items[id];
  }
);

export const { closeReachToMax, addToCart, changeQuantity, removeItem } =
  cartSlice.actions;
export { getRecordsByCartItems };
export default cartSlice.reducer;
