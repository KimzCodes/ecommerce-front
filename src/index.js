import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Items from "./pages/Items";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/categories/:id/items",
        element: <Items />,
        loader: ({ params }) => {
          if (isNaN(params.id)) {
            throw new Response("Bad Request", {
              statusText: "Item not found",
              status: 400,
            });
          }
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
