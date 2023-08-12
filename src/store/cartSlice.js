import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  records: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const id = action.payload;

      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  },
  extraReducers: (builder) => {},
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

export const addToCartAvailability = createSelector(
  (state) => state.cart.items,
  (_, itemId) => itemId,
  (_, __, max) => max,
  (items, itemId, max) => {
    const currentQuantity = items[itemId] || 0;
    const availableQuantity = max - currentQuantity;
    return availableQuantity;
  }
);

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
