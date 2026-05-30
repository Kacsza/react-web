import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";  
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import OMnie from "./pages/OMnie/Omnie";

export const router = createBrowserRouter([  
   {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/omnie",
    element: <OMnie />,
  }
])


