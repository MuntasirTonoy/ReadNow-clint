import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Home from "../src/pages/Home";


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