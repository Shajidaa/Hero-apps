import { useEffect, useState } from "react";
import Navbar from "../Components/Header/Navbar";
import { Outlet } from "react-router";
import { isRouteErrorResponse, useRouteError } from "react-router";
import ErrorPage from "../Pages/Home/ErrorPages/ErrorPage";
import Footer from "../Components/Header/Footer/Footer";
import AppContext from "../context/AppContext";
import { deleteStoreApp, getStoreApp } from "../Utillity/store";
import useApps from "../Hooks/Hooks";

const MainLayouts = () => {
  const error = useRouteError();
  const [install, setInstall] = useState(() => getStoreApp());

  const { apps } = useApps();

  const [installedApps, setInstallApps] = useState([]);

  useEffect(() => {
    setInstallApps(apps.filter((app) => install.includes(app.id.toString())));
  }, [apps, install]);

  const handleDelete = (id) => {
    deleteStoreApp("install", id);

    setInstallApps(installedApps.filter((app) => app.id !== id));
    console.log(installedApps);
  };

  return (
    <div>
      <Navbar></Navbar>

      {isRouteErrorResponse(error) ? (
        <ErrorPage></ErrorPage>
      ) : (
        <AppContext.Provider
          value={{
            installedApps,
            handleDelete,
            setInstallApps,
            setInstall,
            install,
          }}
        >
          <Outlet></Outlet>
        </AppContext.Provider>
      )}
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
