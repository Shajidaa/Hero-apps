import React, { useState } from "react";
import useApps from "../../../Hooks/Hooks";
import AppCard from "../../../Components/Header/AppCard/AppCard";
import ErrorApp from "../ErrorPages/ErrorApp";
import Container from "../../../Components/Header/Container/Container";
import Spinner from "../../../Components/Header/Spinner/Spinner";
import { PropagateLoader } from "react-spinners";

const Apps = () => {
  const { loading, error, apps } = useApps();
  const [search, setSearch] = useState("");

  const term = search.trim().toLowerCase();

  const searchApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  const noResults = !loading && !error && searchApps.length === 0;

  return (
    <Container>
      <div>
        <div>
          <h1 className="font-bold text-3xl text-center md:mt-20 mt-10 md:text-5xl text-[#001931]  ">
            Our All Applications
          </h1>
          <p
            className="text-[#627382] text-xl font-normal lg:leading-20 md:leading-15 leading-10
            text-center"
          >
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between items-center mb-4 px-4 lg:px-0 md:px-4">
          <h1 className="font-semibold text-2xl text-[#001931]">
            (<span>{searchApps.length}</span>) Apps Found{" "}
          </h1>
          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className=" grow stroke-1 stroke-[#D2D2D2] input-ghost"
                placeholder="Search Apps"
              />
            </label>
          </div>
        </div>
        {error ? (
          <ErrorApp></ErrorApp>
        ) : noResults ? (
          <ErrorApp></ErrorApp>
        ) : (
          <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-3 lg:grid-cols-4 px-4 lg:px-2 md:px-4">
            {loading ? (
              <div className="col-span-full">
                <div className="flex justify-center items-center min-h-screen">
                  <PropagateLoader color="#8e0cae"></PropagateLoader>;
                </div>
              </div>
            ) : search ? (
              <div className="col-span-full">
                <div className="flex justify-center items-center min-h-screen">
                  <PropagateLoader color="#8e0cae"></PropagateLoader>;
                </div>
              </div>
            ) : (
              searchApps.map((app) => (
                <AppCard key={app.id} app={app}></AppCard>
              ))
            )}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Apps;
