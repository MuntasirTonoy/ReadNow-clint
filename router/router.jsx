import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import BasicLayout from "../layout/BasicLayout";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: BasicLayout,
    children:[
        {
          index: true,
          Component:Home
        },
    ]
  },
]);