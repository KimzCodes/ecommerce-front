import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const filterProducts = createAsyncThunk(
  "products/filterProducts",
  async (prefix, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(`/items?cat_prefix=${prefix}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
