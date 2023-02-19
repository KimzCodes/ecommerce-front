import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./asyncThunk";
import initialState from "./initialState";

const categorySlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.records = action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export { getCategories };
export default categorySlice.reducer;
