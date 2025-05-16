import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";
import "./style.css"
import Home from './pages/Home';
import Error from "./pages/Error";
import Root from "./layout/Root";
import Sign_in from "./pages/Sign_in";
import Sign_up from "./pages/Sign_up";

const router = createBrowserRouter([
          {
                    path: "/",
                    element: <Root />,
                    errorElement: <Error />,
                    children: [
                              {
                                        path: "/",
                                        element: <Home />,
                                        loader: async () => {
                                                  const response = await fetch("/news.json");
                                                  const data = await response.json();
                                                  return data;
                                        }
                              },
                              {
                                        path: "sign-in",
                                        element: <Sign_in />
                              },
                              {
                                        path: "sign-up",
                                        element: <Sign_up />
                              },
                    ]
          },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
          <RouterProvider router={router} />
);
