import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  records: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default cartSlice.reducer;
