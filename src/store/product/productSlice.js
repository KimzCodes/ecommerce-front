import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import actFilterProducts from "./act/actFilterProducts";

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
    builder.addCase(actFilterProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actFilterProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.records = action.payload;
    });
    builder.addCase(actFilterProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export { actFilterProducts };
export const { cleanRecords } = productSlice.actions;
export default productSlice.reducer;
