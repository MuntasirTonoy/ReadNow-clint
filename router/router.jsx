// src/routes/router.jsx
import { createBrowserRouter } from "react-router";

// Layouts

import DashboardLayout from "../layout/DashboardLayout";

import BasicLayout from "../src/layout/BasicLayout";
import Home from "../src/pages/Home";
import Browse from "../src/components/Browse";
import DashboardHome from "../components/dashboard/DashboardHome";

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
