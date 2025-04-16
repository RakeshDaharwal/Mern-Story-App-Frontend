import { useRoutes, Navigate } from "react-router-dom";
import { Suspense } from "react";

// // import all modular routes
import { UserRoutes } from "./UserRoute";
import { AdminRoutes } from "./AdminRoute";
import { authRoutes } from "./AuthRoutes";
import { publicRoutes } from "./PublicRoutes";

const AppRoutes = () => {
  const routes = useRoutes([
    ...publicRoutes,
    authRoutes,
    UserRoutes,
    AdminRoutes,
    { path: "*", element: <Navigate to="/" /> }
  ]);

  return (
    <Suspense fallback={<div className="p-5">Loading...</div>}>
      {routes}
    </Suspense>
  );
};

export default AppRoutes;
