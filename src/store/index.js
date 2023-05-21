import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth/authSlice";
import categories from "./category/categorySlice";
import products from "./product/productSlice";
import cart from "./cart/cartSlice";
import global from "./global/globalSlice";

const persistConfig = {
  key: "ecom",
  version: 1,
  storage,
  whitelist: ["cart", "auth"],
};

const rootReducer = combineReducers({
  categories,
  products,
  cart,
  global,
  auth,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
