const getStoreApp = (key) => {
  const storeApp = JSON.parse(localStorage.getItem(key));
  if (storeApp) {
    return storeApp;
  } else {
    return [];
  }
};

const addToStore = (key, id) => {
  const storedAppData = getStoreApp(key);
  if (storedAppData.includes(id)) {
    alert(" already add");
  } else {
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
