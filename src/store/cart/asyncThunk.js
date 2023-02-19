import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRecordsByCartItems = createAsyncThunk(
  "products/getRecordsByCartItems",
  async (_, thunkAPI) => {
    const { getState, rejectWithValue } = thunkAPI;
    const {
      cart: { items },
    } = getState();

    if (!Object.keys(items).length) {
      return [];
    }

    const ids = Object.keys(items)
      .map((el) => `id=${el}`)
      .join("&");

    try {
      const res = await fetch(`http://localhost:5005/items?${ids}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
