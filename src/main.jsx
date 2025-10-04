import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Menu from "./pages/Menu.jsx";
import RootLayout from "./RootLayout/RootLayout.jsx";
import ItemDetails from "./pages/ItemDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"),
      },
      {
        path: "/:idMeal",
        Component: ItemDetails,
        loader: ({ params }) =>
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),

      },
      { path: "/about", Component: About },
      { path: "/menu", Component: Menu },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
