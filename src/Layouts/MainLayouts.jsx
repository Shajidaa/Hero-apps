import { useEffect, useState } from "react";
import Navbar from "../Components/Header/Navbar";
import { Outlet, useLocation } from "react-router";
import { isRouteErrorResponse, useRouteError } from "react-router";
import ErrorPage from "../Pages/Home/ErrorPages/ErrorPage";
import Footer from "../Components/Header/Footer/Footer";
import AppContext from "../context/AppContext";
import { deleteStoreApp, getStoreApp } from "../Utillity/store";
import useApps from "../Hooks/Hooks";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "../Components/Header/Spinner/Spinner";
import { PropagateLoader } from "react-spinners";

const MainLayouts = () => {
  const error = useRouteError();
  const location = useLocation();
  const [install, setInstall] = useState(() => getStoreApp());

  const { apps, loading } = useApps();

  const [installedApps, setInstallApps] = useState([]);
  const [pathLoading, setPathLoading] = useState(false);

  useEffect(() => {
    setInstallApps(apps.filter((app) => install.includes(app.id.toString())));
  }, [apps, install]);

  useEffect(() => {
    setPathLoading(true);
    const moment = setTimeout(() => {
      setPathLoading(false);
    }, 700);
    return () => clearTimeout(moment);
  }, [location]);

  const handleDelete = (id) => {
    deleteStoreApp("install", id);
    setInstall((prev) => prev.filter((itemId) => itemId !== String(id)));

    setInstallApps((prev) => prev.filter((app) => app.id !== id));
    toast("App uninstall successfully!");
  };
  if (loading || pathLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <PropagateLoader color="#8e0cae"></PropagateLoader>
      </div>
    );
  }
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
      <ToastContainer autoClose={800}></ToastContainer>
    </div>
  );
};

export default MainLayouts;
