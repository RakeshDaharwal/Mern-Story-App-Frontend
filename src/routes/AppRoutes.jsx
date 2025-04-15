import { useRoutes, Navigate } from "react-router-dom";
import { Suspense } from "react";

// import all modular routes
import { userRoutes } from "./UserRoutes";
import { adminRoutes } from "./AdminRoutes";
import { authRoutes } from "./AuthRoutes";
import { publicRoutes } from "./PublicRoutes";

const AppRoutes = () => {
  const routes = useRoutes([
    ...publicRoutes,
    authRoutes,
    userRoutes,
    adminRoutes,
    { path: "*", element: <Navigate to="/" /> }
  ]);

  return (
    <Suspense fallback={<div className="p-5">Loading...</div>}>
      {routes}
    </Suspense>
  );
};

export default AppRoutes;
