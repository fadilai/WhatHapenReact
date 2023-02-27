import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import List from './pages/List';
import Create from './pages/Create';
import Update from './pages/Update';



import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <List/>,
  },
  {
    path: "/create",
    element: <Create/>,
  },
  {
    path: "/update/:idUser",
    element:<Update/>,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <List />
  <RouterProvider router={router} />

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
