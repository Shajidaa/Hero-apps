import React, { useState } from "react";
import { getStoreApp } from "../../../Utillity/store";

const InstallationPage = () => {
  const [install, setInstall] = useState(() => getStoreApp());
  // console.log(install);
  if (!install.length) return <p>no app install </p>;
  // const installApp={
  //   install.map()
  // }
  return (
    <div>
      this is installation pages........
      <p>{install.length}</p>
      {install.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
};

export default InstallationPage;
