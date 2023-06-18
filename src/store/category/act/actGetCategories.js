import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const { data } = await axios.get("/category", { signal });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default actGetCategories;
