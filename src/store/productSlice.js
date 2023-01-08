import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const filterProducts = createAsyncThunk(
  "products/filterProducts",
  async (prefix, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `http://localhost:5005/items?cat_prefix=${prefix}`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const initialState = { loading: false, error: null, records: [] };

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanRecords(state) {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
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

export default productSlice.reducer;
