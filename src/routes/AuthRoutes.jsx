import { lazy } from "react";

const Login = lazy(() => import("../pages/Auth/Login"));
const Register = lazy(() => import("../pages/Auth/Register"));

export const authRoutes = {
  path: "/auth",
  children: [
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> },
  ],
};
