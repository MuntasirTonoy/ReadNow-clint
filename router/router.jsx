import { createBrowserRouter } from "react-router";


import BasicLayout from "../src/layout/BasicLayout";
import Home from "../src/pages/Home";
import Browse from "../src/components/Browse";
import BookDetails from "../src/pages/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: BasicLayout,
    children:[
        {
          index: true,
          Component:Home
        },
        { path: "/browse", Component: Browse },
        {
          path: "/book/:id",Component: BookDetails,
        }
    ]
  },
]);
