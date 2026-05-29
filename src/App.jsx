import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";  
import Home from "./pages/Home/Home";

export const router = createBrowserRouter([  
   {
    path: "/",
    element: <Home />,
  },
])


