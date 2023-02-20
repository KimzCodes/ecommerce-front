import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get("/category");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
