import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { filterProducts } from "./asyncThunk";

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanRecords(state) {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    //filter by category
    builder.addCase(filterProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(filterProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.records = action.payload;
    });
    builder.addCase(filterProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { cleanRecords } = productSlice.actions;
export { filterProducts };
export default productSlice.reducer;
