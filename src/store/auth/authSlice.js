import { createSlice } from "@reduxjs/toolkit";
import { login } from "./asyncThunk";
import initialState from "./initialState";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.accessToken = action.payload.accessToken;
      state.userInfo = action.payload.user;
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = true;
      state.error = null;
    });
  },
});

export { login };
export default authSlice.reducer;
