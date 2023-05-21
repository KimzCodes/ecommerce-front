import { createAsyncThunk } from "@reduxjs/toolkit";
import { customAPI } from "../../API/axios-custom";

export const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await customAPI.get("/category");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default actGetCategories;
