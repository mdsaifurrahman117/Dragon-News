import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";
import "./style.css"
import Home from './pages/Home';
import Error from "./pages/Error";
import Root from "./layout/Root";
import Sign_in from "./pages/Sign_in";

const router = createBrowserRouter([
          {
                    path: "/",
                    element: <Root />,
                    errorElement: <Error />,
                    children: [
                              {
                                        path: "/",
                                        element: <Home />
                              },
                              {
                                        path: "sign-in",
                                        element: <Sign_in />
                              },
                    ]
          },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
          <RouterProvider router={router} />
);
