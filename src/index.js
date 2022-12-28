import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./state";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Items from "./pages/Items";
import ErrorPage from "./pages/ErrorPage";
import NewCollections from "./pages/NewCollections";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "new-collections", element: <NewCollections /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "categories/:prefix/items",
        element: <Items />,
        loader: ({ params }) => {
          if (!isNaN(params.prefix)) {
            throw new Response("Bad Request", {
              statusText: "Category not found",
              status: 400,
            });
          }
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
