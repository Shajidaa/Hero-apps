import React, { useEffect, useState } from "react";
import {
  addToStore,
  deleteStoreApp,
  isAppInstalled,
} from "../../Utillity/store";

const AppBtn = ({ appId }) => {
  const key = "install";
  const [installed, setInstalled] = useState(false);
  useEffect(() => {
    setInstalled(isAppInstalled(key, appId));
  }, [appId]);
  const handleClick = () => {
    if (installed) {
      deleteStoreApp(key, appId);
      setInstalled(false);
    } else {
      addToStore(key, appId);
      setInstalled(true);
    }
  };
  return (
    <button
      onClick={handleClick}
      disabled={installed}
      className={`px-4 py-2 rounded ${
        installed ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white"
      }`}
    >
      {installed ? "Installed" : "Install"}
    </button>
  );
};

export default AppBtn;
