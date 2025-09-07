// src/routes/router.jsx
import { createBrowserRouter } from "react-router";

// Layouts

import DashboardLayout from "../layout/DashboardLayout";

import BasicLayout from "../src/layout/BasicLayout";
import Home from "../src/pages/Home";
import Browse from "../src/components/Browse";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      { index: true, element: <Home /> },       
      { path: "browse", element: <Browse /> }, 
    ],
  },
  
]);
