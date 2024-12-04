import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Layout from "../layout.jsx";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import Service from "./Services/Services.jsx";
import Contact from "./Contact/Contact.jsx";
const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Service />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },

  {
    path: "*",
    element: "NOT FOUND!",
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <Outlet />
  </RouterProvider>
);
