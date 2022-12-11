import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const filterItems = createAsyncThunk(
  "items/filterItems",
  async (prefix, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `http://localhost:5000/items?cat_prefix=${prefix}`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const initialState = { loading: false, error: null, records: [] };

const itemSlice = createSlice({
  name: "items",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(filterItems.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(filterItems.fulfilled, (state, action) => {
      state.loading = false;
      state.records = action.payload;
    });
    builder.addCase(filterItems.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default itemSlice.reducer;
