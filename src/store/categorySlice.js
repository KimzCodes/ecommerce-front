import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  records: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default categorySlice.reducer;
