import React, { useState } from "react";
import useApps from "./Hooks";

const useAppList = () => {
  const [install, setInstall] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [sort, setSort] = useState("");
  const apps = useApps();
  return <div></div>;
};

export default useAppList;
