import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const tracking = createAsyncThunk(
  "global/tracking",
  async (error, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await axios.post("http://localhost:5005/tracking", {
        message: error.message,
        endPoint: error.config.url,
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const globalSlice = createSlice({
  name: "global",
  initialState: {},
  reducers: {},
});

export default globalSlice.reducer;
