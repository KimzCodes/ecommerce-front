import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const getRecordsByCartItems = createAsyncThunk(
  "products/getRecordsByCartItems",
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

const initialState = {
  loading: false,
  error: null,
  items: {},
  reachToMax: false,
  cartRecordsFullInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    closeReachToMax(state) {
      state.reachToMax = false;
    },
    changeQuantity(state, action) {
      const { id, quantity } = action.payload;
      state.items[id] = quantity;
    },
    addToCart(state, action) {
      const id = action.payload.id;
      const max = action.payload.max;
      if (state.items[id] === max) {
        state.reachToMax = true;
      } else {
        if (state.reachToMax) {
          state.reachToMax = false;
        }

        if (state.items[id]) {
          state.items[id]++;
        } else {
          state.items[id] = 1;
        }
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      delete state.items[id];
      state.cartRecordsFullInfo = state.cartRecordsFullInfo.filter(
        (el) => el.id !== id
      );
    },
  },
  extraReducers: (builder) => {
    //filter by cart items
    builder.addCase(getRecordsByCartItems.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getRecordsByCartItems.fulfilled, (state, action) => {
      state.loading = false;
      state.cartRecordsFullInfo = action.payload;
    });
    builder.addCase(getRecordsByCartItems.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const cartTotalQuantity = createSelector(
  (state) => state.cart.items,
  (items) => {
    let totalQuantity = 0;

    for (const id in items) {
      totalQuantity += items[id];
    }
    return totalQuantity;
  }
);

export const cartTotalPrice = createSelector(
  (state) => state.cart,
  ({ items, cartRecordsFullInfo: records }) => {
    let price = 0;
    for (const record of records) {
      price += record.price * items[record.id];
    }
    return price.toFixed(2);
  }
);

export const { closeReachToMax, addToCart, changeQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
