import { createSlice } from "@reduxjs/toolkit";
import actLogin from "./act/actLogin";
import initialState from "./initialState";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(actLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.accessToken = action.payload.accessToken;
      state.userInfo = action.payload.user;
    });
    builder.addCase(actLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export { actLogin };
export default authSlice.reducer;
