import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import actLogin from "./act/actLogin";
import actRegister from "./act/actRegister";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetUIState: (state) => {
      state.actType = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    //login
    builder.addCase(actLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.actType = "login";
    });
    builder.addCase(actLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.actType = null;
    });
    builder.addCase(actLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.actType = "login";
    });
    //register
    builder.addCase(actRegister.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.actType = "register";
    });
    builder.addCase(actRegister.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.actType = null;
    });
    builder.addCase(actRegister.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.actType = "register";
    });
  },
});

export { actLogin, actRegister };

export const { resetUIState } = authSlice.actions;

export default authSlice.reducer;
