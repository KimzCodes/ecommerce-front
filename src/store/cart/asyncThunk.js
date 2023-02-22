import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRecordsByCartItems = createAsyncThunk(
  "cart/getRecordsByCartItems",
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
      const { data } = await axios.get(`/itemsx?${ids}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
