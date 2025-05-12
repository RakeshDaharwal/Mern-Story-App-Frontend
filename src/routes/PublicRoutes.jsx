import { lazy } from "react";

const VideoPlayer = lazy(() => import("../pages/VideoPlayer"));

export const publicRoutes = [{ path: "/", element: <VideoPlayer /> }];