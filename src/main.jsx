import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {path: "/", element: <App />,},
  {path:"*", element:<Navigate to="/" replace />},
  {path:"/welcome", element:<div><h1>404 - page not found</h1></div>},
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);