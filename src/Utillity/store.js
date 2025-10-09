import { toast } from "react-toastify";

const getStoreApp = (key = "install") => {
  const storeApp = JSON.parse(localStorage.getItem(key));
  // if (storeApp) {
  //   return storeApp;
  // } else {
  //   return [];
  // }
  return Array.isArray(storeApp) ? storeApp : [];
};

const addToStore = (key = "install", id) => {
  const storedAppData = getStoreApp(key);
  const strId = String(id);

  if (storedAppData.includes(strId)) {
    toast.info("App install successfully!");
  } else {
    const updateInstalList = [...storedAppData, id];
    const data = JSON.stringify(updateInstalList);
    localStorage.setItem(key, data);
    toast.success("Added Successfully!");
  }
};
const deleteStoreApp = (key = "install", id) => {
  const storeAppData = getStoreApp(key);
  const strId = String(id);
  const updateList = storeAppData.filter((itemId) => itemId !== strId);

  localStorage.setItem(key, JSON.stringify(updateList));
};

const isAppInstalled = (key = "install", id) => {
  const storedAppData = getStoreApp(key);
  return storedAppData.includes(String(id));
};
export { addToStore, getStoreApp, deleteStoreApp, isAppInstalled };
