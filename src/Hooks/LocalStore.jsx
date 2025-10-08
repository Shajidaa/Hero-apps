import React, { useEffect, useState } from "react";
// import useApps from "./Hooks";
import { getStoreApp } from "../Utillity/store";
import { useParams } from "react-router";

const useAppList = () => {
  const [install, setInstall] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [sort, setSort] = useState("");
  //   const data = useApps();
  // const { id } = useParams();
  // const [app, setApp] = useState(null);
  // useEffect(() => {
  //   const storeInstallApp = getStoreApp("installList") || [];
  //   const foundApp = storeInstallApp.filter((app) =>
  //     storeInstallApp.includes(app.id)
  //   );
  //   setInstall(foundApp);
  // }, [id, toggle]);

  return { install, setInstall, toggle, setToggle, sort, setSort };
};

export default useAppList;
