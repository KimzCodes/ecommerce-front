import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import "./API/axios-global";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// API
import AxiosInterceptor from "./API/AxiosInterceptor";

// guards
import GuestRoute from "./components/guards/GuestRoute";
import AuthRoute from "./components/guards/AuthRoute";

// pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";
import ErrorPage from "./pages/ErrorPage";
import NewCollections from "./pages/NewCollections";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfileLayout from "./pages/profile/Layout";
import Account from "./pages/profile/Account";
import AccountUpdate from "./pages/profile/AccountUpdate";
import Orders from "./pages/profile/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "new-collections", element: <NewCollections /> },
      { path: "shopping-cart", element: <ShoppingCart /> },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "categories/:prefix/products",
        element: <Products />,
        loader: ({ params }) => {
          if (!isNaN(params.prefix)) {
            throw new Response("Bad Request", {
              statusText: "Category not found",
              status: 400,
            });
          }
        },
      },
      {
        path: "login",
        element: (
          <GuestRoute>
            <Login />
          </GuestRoute>
        ),
      },
      {
        path: "register",
        element: (
          <GuestRoute>
            <Register />
          </GuestRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <AuthRoute>
            <ProfileLayout />
          </AuthRoute>
        ),
        children: [
          { index: true, element: <Account /> },
          { path: "account", element: <Account /> },
          { path: "account-update", element: <AccountUpdate /> },
          { path: "orders", element: <Orders /> },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AxiosInterceptor>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </AxiosInterceptor>
  </Provider>
);
