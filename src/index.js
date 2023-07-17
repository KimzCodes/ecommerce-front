import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// layouts
import Layout from "./pages/Layout";

//pages
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import NewCollections from "./pages/NewCollections";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "categories/:prefix/products",
        element: <Products />,
      },
      {
        path: "new-collections",
        element: <NewCollections />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
