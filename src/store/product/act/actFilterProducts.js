import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const actFilterProducts = createAsyncThunk(
  "products/actFilterProducts",
  async (prefix, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const { data } = await axios.get(`/items?cat_prefix=${prefix}`, {
        signal,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default actFilterProducts;
