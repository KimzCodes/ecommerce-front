import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actLogin = createAsyncThunk(
  "auth/actLogin",
  async (userInfo, thunkAPI) => {
    const { email, password } = userInfo;
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios.post("/login", {
        email,
        password,
      });
      delete res.data.user.id;

      return res.data;
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        return rejectWithValue("Error from network");
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export default actLogin;
