import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const actLogin = createAsyncThunk(
  "auth/actLogin",
  async (userInfo, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    const { email, password } = userInfo;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      delete data.user.id;
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export default actLogin;
