import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Mobiles from "./components/Mobiles/mobiles.jsx";
import laptops from "./components/Laptops/laptops.jsx";
import Header from "./components/Header/Header.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Header,
      },
      {
        path: "/mobiles",
        Component: Mobiles,
      },
      {
        path: "/src/components/Mobiles",
        Component: Mobiles,
      },
      {
        path: "/src/components/Laptops",
        Component: laptops,
      },
      {
        path: "/src/components/Home",
        Component: Home,
      },
    ],
  },
  {
    path: "/contact",
    element: <div>Contact Us</div>,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/app2",
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
