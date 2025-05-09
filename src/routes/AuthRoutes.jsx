import { lazy } from "react";

const SignIn = lazy(() => import("../pages/Auth/SignIn"));
const SignUp = lazy(() => import("../pages/Auth/SignUp"));

export const authRoutes = {
  path: "/auth",
  children: [
    { path: "signin", element: <SignIn /> },
    { path: "signup", element: <SignUp /> },
  ],
};
