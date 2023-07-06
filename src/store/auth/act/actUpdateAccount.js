import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actUpdateAccount = createAsyncThunk(
  "auth/actUpdateAccount",
  async (formData, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const {
      auth: { user: userState, accessToken },
    } = getState();

    console.log(formData);
  }
);

export default actUpdateAccount;
