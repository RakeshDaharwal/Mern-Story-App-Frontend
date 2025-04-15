import { lazy } from "react";


const UserDashboard = lazy(() => import("../pages/User/UserDashboard"));
const HorrorStory = lazy(() => import("../pages/User/Story/HorrorStory"));
const HistoricalStory = lazy(() => import("../pages/User/Story/HistoricalStory"));

export const userRoutes = {
  path: "/user",
  children: [
    { path: "dashboard", element: <UserDashboard /> },
    { path: "story/horror", element: <HorrorStory /> },
    { path: "story/historical", element: <HistoricalStory /> },
  ],
};