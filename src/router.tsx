import { createBrowserRouter } from "react-router-dom";
import Home from "./features/home/Home";
import PropertyList from "./features/properties/PropertyList";
import Layout from "./features/properties/PropertyLayout";

export function createRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [],
    },
    {
      element: <Layout />,
      children: [
        {
          element: <PropertyList />,
          path: "/properties",
        },
      ],
    },
  ]);
}
