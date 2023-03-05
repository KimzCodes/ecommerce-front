import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "auth/login",
  async (userInfo, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    const { email, password } = userInfo;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
