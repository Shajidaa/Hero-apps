import React, { useState } from "react";
import { getStoreApp } from "../../../Utillity/store";
import useApps from "../../../Hooks/Hooks";
import Container from "../../../Components/Header/Container/Container";

const InstallationPage = () => {
  const [install, setInstall] = useState(() => getStoreApp());
  const { apps } = useApps();

  // console.log(apps);

  // console.log(install);
  const installedApps = apps.filter((app) =>
    install.includes(app.id.toString())
  );
  // console.log(installedApps);

  if (!installedApps.length) return <p>no app install </p>;

  return (
    <div>
      <h1 className="font-bold text-3xl text-center md:mt-20 mt-10 md:text-5xl text-[#001931]  ">
        Your Installed Apps
      </h1>
      <p
        className="text-[#627382] text-xl font-normal lg:leading-20 md:leading-15 leading-10
            text-center"
      >
        Explore All Trending Apps on the Market developed by us
      </p>
      <Container>
        <p>{installedApps.length}</p>
        <div>
          {installedApps.map((app) => (
            <li
              key={app.id}
              className="list-row flex justify-between items-center mb-2 "
            >
              <div className="flex flex-row justify-center items-center gap-2">
                <img className="size-10 rounded-box" src={app.image} />
                <div>
                  <div>{app.title}</div>
                </div>
              </div>

              <div>
                <button className="btn  btn-ghost">Uninstall</button>
              </div>
            </li>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default InstallationPage;
