import { useRoutes, Navigate } from "react-router-dom";
import { Suspense } from "react";

// // import all modular routes
import { UserRoutes } from "./UserRoute";
import { AdminRoutes } from "./AdminRoute";
import { authRoutes } from "./AuthRoutes";
import { publicRoutes } from "./PublicRoutes";

import Error404 from "../components/Common/Error404";

const AppRoutes = () => {
  const routes = useRoutes([
    ...publicRoutes,
    authRoutes,
    UserRoutes,
    AdminRoutes,
    { path: "*", element: <Error404 /> }
  ]);

  return (
    <Suspense fallback={<div className="p-5">Loading...</div>}>
      {routes}
    </Suspense>
  );
};

export default AppRoutes;
