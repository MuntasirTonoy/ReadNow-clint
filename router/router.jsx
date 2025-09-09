import { createBrowserRouter } from "react-router";

import BasicLayout from "../src/layout/BasicLayout";
import Home from "../src/pages/Home";
import Browse from "../src/components/Browse";
import DashboardHome from "../components/dashboard/DashboardHome";
import BookDetails from "../src/pages/BookDetails";
import DashboardLayout from "../layout/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: BasicLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      { path: "/browse", Component: Browse },
      {
        path: "/book/:id",
        Component: BookDetails,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
    ],
  },
]);
