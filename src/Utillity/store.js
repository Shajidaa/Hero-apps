import { toast } from "react-toastify";

const getStoreApp = (key = "install") => {
  const storeApp = JSON.parse(localStorage.getItem(key));
  if (storeApp) {
    return storeApp;
  } else {
    return [];
  }
};

const addToStore = (key = "install", id) => {
  const storedAppData = getStoreApp(key);
  if (storedAppData.includes(id)) {
    toast.success("App install successfully!");
  } else {
    const updateInstalList = [...storedAppData, id];
    const data = JSON.stringify(updateInstalList);
    localStorage.setItem(key, data);
    toast.success("Added Successfully!");
  }
};
const deleteStoreApp = (key = "install", id) => {
  const storeAppData = getStoreApp(key);

  const updateList = storeAppData.filter((itemId) => itemId != id);

  localStorage.setItem(key, JSON.stringify(updateList));
};

const isAppInstalled = (key = "install", id) => {
  const storedAppData = getStoreApp(key);
  return storedAppData.includes(id);
};
export { addToStore, getStoreApp, deleteStoreApp, isAppInstalled };
