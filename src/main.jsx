import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import App from './site/App.jsx';

//lazy load komponentów
const Welcome = lazy(() => import('./site/Welcome.jsx'));

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/welcome",
    element: (
      //obsługa lazy loadingu
      //<Suspense fallback={<div>Ładowanie podstrony...</div>}>
        <Welcome />
      //</Suspense>
    ),
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);