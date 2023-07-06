import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actUpdateAccount = createAsyncThunk(
  "auth/actUpdateAccount",
  async (formData, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const {
      auth: { user: userState, accessToken },
    } = getState();

    try {
      const {
        data: [userFullInfo],
      } = await axios.get(`/users?email=${userState.email}`);

      if (Object.keys(userFullInfo).length === 0 && !userFullInfo?.id) {
        return rejectWithValue("Error from server");
      }

      await axios.patch(
        `/660/users/${userFullInfo.id}`,
        { ...formData },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
);

export default actUpdateAccount;
