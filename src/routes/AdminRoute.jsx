import { lazy } from "react";

const AdminDashboard = lazy(() => import("../pages/Admin/AdminDashboard"));
const AddStory = lazy(() => import("../pages/Admin/AddStory"));

export const AdminRoutes = {
  path: "/admin",
  children: [
    { path: "dashboard", element: <AdminDashboard /> },
    { path: "add-story", element: <AddStory /> },
  ],
};