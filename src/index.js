import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Layout from './pages/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Items from './pages/Items';
import ShoopingCard from './pages/ShoopingCard';
import Login from './pages/Login';
import Register from './pages/Register';
import NewCollection from './pages/NewCollection';
import { Provider } from 'react-redux';
import { store, persistor } from './state/index';
import { PersistGate } from 'redux-persist/integration/react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'categories', element: <Categories /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'newcollection', element: <NewCollection /> },
      {
        path: 'categories/:prefix/items',
        element: <Items />,

        loader: ({ params }) => {
          if (!isNaN(params.prefix)) {
            throw new Response('bad request', {
              status: 400,
              statusText: 'please enter valid num for item',
            });
          }
          return null;
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router}></RouterProvider>
    </PersistGate>
  </Provider>
);
