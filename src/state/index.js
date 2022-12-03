import { configureStore } from "@reduxjs/toolkit";
import categories from "./categorySlice";

const store = configureStore({ reducer: { categories } });

export default store;
