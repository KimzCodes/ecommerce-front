import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getItems = createAsyncThunk(
  'items/getItems',
  async (prefix, thunAPI) => {
    const { rejectWithValue } = thunAPI;
    try {
      const res = await fetch(
        `http://localhost:3000/items?cat_prefix=${prefix}`
      );
      const data = await res.json();
      return data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

const initialState = {
  loading: false,
  error: null,
  items: [],
};

const ItemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    clearItems(state) {
      state.items = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getItems.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(getItems.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
    builder.addCase(getItems.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default ItemSlice.reducer;
