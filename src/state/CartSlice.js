import { createSlice, createSelector } from '@reduxjs/toolkit';
const initialState = { items: {}, reachMax: false };
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addtoCart: (state, action) => {
      const id = action.payload.id;
      const max = action.payload.max;

      if (state.items[id] === max) {
        state.reachMax = true;
        return;
      } else {
        if (state.reachMax) {
          state.reachMax = false;
        }

        if (state.items[id]) {
          state.items[id]++;
        } else {
          state.items[id] = 1;
        }
      }
    },
    closeReachMax: (state) => {
      state.reachMax = false;
    },
  },
});

export const totalQuantityCart = createSelector(
  (state) => state.cart.items,
  (items) => {
    let total = 0;
    for (let id in items) {
      total += items[id];
    }
    return total;
  }
);
export const { closeReachMax } = cartSlice.actions;
export default cartSlice.reducer;
