import { configureStore } from "@reduxjs/toolkit";
import category from "./categorySlice";
import product from "./productSlice";
import cart from "./cartSlice";

const store = configureStore({ reducer: { category, product, cart } });

export default store;
