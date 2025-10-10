import React, { useContext, useState } from "react";

import Container from "../../../Components/Header/Container/Container";
import Download from "../../../assets/icon-downloads.png";
import rat from "../../../assets/icon-ratings.png";
import AppContext from "../../../context/AppContext";
import NotInstalled from "../../../Components/Header/NotInstalled/NotInstalled";

const InstallationPage = () => {
  const [sort, setSort] = useState("");
  const { installedApps, handleDelete, setInstallApps } =
    useContext(AppContext);

  const handleSort = (type) => {
    setSort(type);
    const sortedApps = [...installedApps].sort((a, b) => {
      if (type === "low") return a.downloads - b.downloads;
      if (type === "high") return b.downloads - a.downloads;
      return 0;
    });
    setInstallApps(sortedApps);
  };

  return (
    <div>
      <h1 className="font-bold text-3xl text-center md:mt-20 mt-10 md:text-5xl text-[#001931]  ">
        Your Installed Apps
      </h1>
      <p
        className="text-[#627382] text-base md:text-xl font-normal lg:leading-20 md:leading-15 
            text-center"
      >
        Explore All Trending Apps on the Market developed by us
      </p>
      <Container>
        <div className="flex justify-between items-center mb-4 p-2">
          <p className="font-semibold text-2xl text-[#001931]">
            ({installedApps.length})Apps Found
          </p>
          <details className="dropdown ">
            <summary className="btn m-1">Sort by downloads</summary>
            <ul
              className="menu dropdown-content bg-base-100
             rounded-box z-1  p-2 shadow-sm"
            >
              <li>
                <a onClick={() => handleSort("low")}>Low-&gt;Height</a>
              </li>
              <li>
                {" "}
                <a onClick={() => handleSort("high")}>Height-&gt;Low</a>
              </li>
            </ul>
          </details>
        </div>
        {installedApps.length > 0 ? (
          <ul className="p-2 md:p-0">
            {installedApps.map((app) => (
              <li
                key={app.id}
                className=" list-row p-2  shadow flex md:flex-row flex-col  bg-white gap-3 rounded justify-between items-center mb-2 "
              >
                <div className=" flex flex-row  gap-3">
                  <img
                    className="md:size-20 size-15 rounded-xl rounded-box"
                    src={app.image}
                  />
                  <div>
                    <div>
                      <h1 className="font-medium text-base md:text-xl text-[#001931]  ">
                        {" "}
                        {app.title}
                      </h1>
                      <div className="flex gap-2 md:gap-4">
                        <div className="flex justify-center items-center ">
                          <div className="md:w-4 w-2 h-2 md:h-4 ">
                            <img
                              className="object-cover"
                              src={Download}
                              alt=""
                            />
                          </div>
                          <h1 className="font-bold md:text-base  text-sm text-[#00D390] ">
                            {app.downloads}M
                          </h1>
                        </div>
                        <div className="flex justify-center items-center ">
                          <div className="md:w-4 w-2 h-2 md:h-4">
                            <img className="object-cover" src={rat} alt="" />
                          </div>
                          <h1 className="font-bold md:text-base  text-sm text-[#FF8811] ">
                            {app.ratingAvg}
                          </h1>
                        </div>
                        <div className="flex justify-center items-center ">
                          <h1 className="font-bold md:text-base  text-sm text-[#627382] ">
                            {app.size}MB
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => handleDelete(app.id)}
                    className="btn bg-[#00D390] text-white text-sm md:text-base  btn-ghost"
                  >
                    Uninstall
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <NotInstalled></NotInstalled>
        )}
      </Container>
    </div>
  );
};

export default InstallationPage;
