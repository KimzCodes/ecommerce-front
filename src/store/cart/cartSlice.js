import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { cartTotalQuantity, totalPrice, itemQuantityById } from "./selectors";

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

export const { closeReachToMax, addToCart, changeQuantity, removeItem } =
  cartSlice.actions;
export { cartTotalQuantity, totalPrice, itemQuantityById };
export default cartSlice.reducer;
