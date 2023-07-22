import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  records: [],
  loading: false,
  error: null,
};

export const filterProducts = createAsyncThunk(
  "product/filterProducts",
  async (catPrefix, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch(
        `http://localhost:5005/items?cat_prefix=${catPrefix}`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
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
