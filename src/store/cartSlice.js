import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  records: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const id = action.payload;

      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  },
  extraReducers: (builder) => {},
});

//init -> useSelector -> state -> fn(createSelector) -> selector(state.cart.items) -> memoize({}) ->result fn -> execute -> memoize(0) -> return 0
//cat.pending ->  useSelector -> state -> fn(createSelector) -> selector(state.cart.items) -> memoize(prev {} vs {}) skip execute-> return (prev result 0 )
//cat.fulfilled ->  useSelector -> state -> fn(createSelector)-> selector(state.cart.items) -> memoize(prev {} vs {}) skip execute-> return (prev result 0 )
export const cartTotalQuantity = createSelector(
  (state) => state.cart.items,
  (items) => {
    console.log("fire");
    let totalQuantity = 0;
    for (const id in items) {
      totalQuantity += items[id];
    }
    return totalQuantity;
  }
);

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
