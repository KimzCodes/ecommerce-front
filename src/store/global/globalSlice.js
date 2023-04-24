import { createSlice } from "@reduxjs/toolkit";
import { actPostTracking } from "./act/actPostTracking";

const globalSlice = createSlice({
  name: "global",
  initialState: {},
  reducers: {},
});

export { actPostTracking };
export default globalSlice.reducer;
