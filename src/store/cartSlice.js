import { createSlice } from "@reduxjs/toolkit";

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

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
