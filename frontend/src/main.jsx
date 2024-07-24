import React from 'react'
import ReactDOM from 'react-dom/client'

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import PrivateRouter from "./components/PrivateRouter.jsx"

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from "./pages/Register.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRouter page={<Home />}  />,
  },
  {
    path: "/home",
    element: <PrivateRouter page={<Home />}  />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
