import { createBrowserRouter } from "react-router-dom";
import Home from "./features/home/Home";
import PropertyList from "./features/properties/PropertyList";
import PropertyLayout from "./features/properties/PropertyLayout";
import PropertyForm from "./features/properties/PropertyForm";

export function createRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [],
    },
    {
      element: <PropertyLayout />,
      children: [
        {
          element: <PropertyList />,
          path: "/properties",
        },
        {
          element: <PropertyForm />,
          path: "/properties/new",
        },
      ],
    },
  ]);
}
