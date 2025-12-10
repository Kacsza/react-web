import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createHashRouter, Navigate, RouterProvider } from 'react-router';
import App from './site/App.jsx';

// lazy load komponentów
const Welcome = lazy(() => import('./site/Welcome.jsx'));

const router = createHashRouter([
  { path: "/", element: <App /> },
  {
    path: "/welcome",
    // wrap lazy-loaded route component in Suspense
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Welcome />
      </Suspense>
    ),
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);