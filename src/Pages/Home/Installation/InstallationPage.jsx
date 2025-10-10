import { useContext, useState } from "react";

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
      if (type === "asc") return a.downloads - b.downloads;
      if (type === "desc") return b.downloads - a.downloads;
      return 0;
    });
    setInstallApps(sortedApps);
  };

  return (
    <div className="lg:px-8 md:px-5 px-4">
      <h1 className="font-bold text-3xl  text-center md:mt-20 mt-10 md:text-5xl text-[#001931]  ">
        Your Installed Apps
      </h1>
      <p
        className="text-[#627382] text-base md:text-xl font-normal lg:leading-20 md:leading-15 
            text-center"
      >
        Explore All Trending Apps on the Market developed by us
      </p>
      <Container>
        <div className="flex justify-between  items-center mb-4 md:p-2 px-2 py-3">
          <p className="font-semibold text-nowrap md:text-2xl w-1/2 mr-1 text-lg text-[#001931]">
            ({installedApps.length})Apps Found
          </p>

          <select
            defaultValue="Sort by downloads"
            className="select  max-w-1/2 "
          >
            <option disabled={true}>Sort by downloads</option>
            <option value={"asc"} onClick={() => handleSort("asc")}>
              {" "}
              Low-&gt;Height
            </option>
            <option value={"desc"} onClick={() => handleSort("desc")}>
              {" "}
              Height-&gt;Low
            </option>
          </select>
        </div>
        {installedApps.length > 0 ? (
          <ul className="p-2 md:p-0">
            {installedApps.map((app) => (
              <li
                key={app.id}
                className=" list-row p-2  shadow flex md:flex-wrap flex-col md:flex-row 
                 bg-white gap-3 rounded justify-between items-center mb-2 "
              >
                <div className=" flex md:flex-row flex-col  justify-center items-center gap-3">
                  <img
                    className="md:size-20 rounded-xl rounded-box"
                    src={app.image}
                  />

                  <div>
                    <h1 className="font-medium  text-base md:text-xl text-[#001931]  ">
                      {" "}
                      {app.title}
                    </h1>
                    <div className="flex justify-center items-center md:justify-start gap-2 md:gap-4">
                      <div className="flex justify-center items-center ">
                        <div className="md:w-4 w-2 h-2 md:h-4 ">
                          <img className="object-cover" src={Download} alt="" />
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
