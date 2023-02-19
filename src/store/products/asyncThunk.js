import { createAsyncThunk } from "@reduxjs/toolkit";

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
