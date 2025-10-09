import React from "react";

import useApps from "../../Hooks/Hooks";
import AppCard from "../../Components/Header/AppCard/AppCard";
import { Link } from "react-router";
import Container from "../../Components/Header/Container/Container";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {
  const { loading, apps } = useApps();
  // console.log({loading,error,apps});
  const trendingApps = apps.slice(0, 8);
  // console.log(trendingApps);

  return (
    <div>
      <Banner></Banner>
      <Container>
        <div>
          <h1 className="font-bold text-3xl text-center md:mt-20 mt-10 md:text-5xl text-[#001931]  ">
            Trending Apps
          </h1>
          <p
            className="text-[#627382] text-xl font-normal lg:leading-20 md:leading-15 leading-10
            text-center"
          >
            Explore All Trending Apps on the Market developed by us.
          </p>
        </div>
        {loading ? (
          <p>loading,.........</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-3 lg:grid-cols-4 px-4 lg:px-2 md:px-4">
            {trendingApps.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
        )}

        <div className="flex justify-center items-center  ">
          <Link
            to="/apps"
            className=" btn text-white  md:my-10 my-5
     bg-linear-to-r from-[#632EE3] to-[#9F62F2]
      font-bold text-base  "
          >
            Show All
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
