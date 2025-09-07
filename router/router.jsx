import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import BasicLayout from "../layout/BasicLayout";
import Home from "../pages/Home/Home";
import DashboardLayout from "../layout/DashboardLayout";
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
