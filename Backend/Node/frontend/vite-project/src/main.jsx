import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//router
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Create from "./routes/Create.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "create",
//     element: <Create />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //children: [] - usamos este array para redirecionar componenetes que podem ser reutilizados
  },
  {
    path: "create",
    element: <Create />,
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
