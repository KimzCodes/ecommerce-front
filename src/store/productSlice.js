import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { removeItem } from "./cartSlice";

export const filterProducts = createAsyncThunk(
  "products/filterProducts",
  async (prefix, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `http://localhost:5005/items?cat_prefix=${prefix}`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const filterByCartItems = createAsyncThunk(
  "products/filterByCartItems",
  async (_, thunkAPI) => {
    const { getState, rejectWithValue } = thunkAPI;
    const {
      cart: { items },
    } = getState();

    if (!Object.keys(items).length) {
      return [];
    }

    const ids = Object.keys(items)
      .map((el) => `id=${el}`)
      .join("&");

    try {
      const res = await fetch(`http://localhost:5005/items?${ids}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = { loading: false, error: null, records: [] };

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanRecords(state) {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    //filter by category
    builder.addCase(filterProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(filterProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.records = action.payload;
    });
    builder.addCase(filterProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //filter by cart items
    builder.addCase(filterByCartItems.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(filterByCartItems.fulfilled, (state, action) => {
      state.loading = false;
      state.records = action.payload;
    });
    builder.addCase(filterByCartItems.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //listen to remove cart item
    builder.addCase(removeItem, (state, action) => {
      const id = action.payload;
      state.records = state.records.filter((el) => el.id !== id);
    });
  },
});
export const { cleanRecords } = productSlice.actions;
export default productSlice.reducer;
