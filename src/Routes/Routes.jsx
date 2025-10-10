import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Home/Apps/Apps";
import AppDetails from "../Pages/Home/AppDetails/AppDetails";
import InstallationPage from "../Pages/Home/Installation/InstallationPage";
import ErrorPage from "../Pages/Home/ErrorPages/ErrorPage";

//name export
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,

    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/app-details/:id",

        element: <AppDetails></AppDetails>,
      },

      {
        path: "/installation",

        Component: InstallationPage,
      },
    ],
  },
]);
export default router;
