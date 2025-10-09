import { toast } from "react-toastify";

const getStoreApp = () => {
  const storeApp = JSON.parse(localStorage.getItem("install"));
  if (storeApp) {
    return storeApp;
  } else {
    return [];
  }
};

const addToStore = (key, id) => {
  const storedAppData = getStoreApp(key);
  if (storedAppData.includes(id)) {
    toast(" already add");
  } else {
    // const updateInstalList=[...storedAppData,]
    toast("it add");
    storedAppData.push(id);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem(key, data);
  }
};
const deleteStoreApp = (key, id) => {
  const storeAppData = getStoreApp(key);
  const updateList = storeAppData.filter((p) => p.id !== id);
  console.log(updateList);
  localStorage.setItem(key, JSON.stringify(updateList));
};

export { addToStore, getStoreApp, deleteStoreApp };
