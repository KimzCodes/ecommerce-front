import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actRegister = createAsyncThunk(
  "auth/actRegister",
  async (userInfo, thunkAPI) => {
    const { email, password, firstName, lastName } = userInfo;
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await axios.post("/register", {
        email,
        password,
        firstName,
        lastName,
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

export default actRegister;
