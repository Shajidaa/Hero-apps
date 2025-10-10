import React, { useEffect, useState } from "react";
import useApps from "../../../Hooks/Hooks";
import AppCard from "../../../Components/Header/AppCard/AppCard";
import ErrorApp from "../ErrorPages/ErrorApp";
import Container from "../../../Components/Header/Container/Container";
import Spinner from "../../../Components/Header/Spinner/Spinner";
import { PropagateLoader } from "react-spinners";

const Apps = () => {
  const { loading, error, apps } = useApps();
  const [search, setSearch] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const term = search.trim().toLowerCase();

  const searchApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

  const noResults = !loading && !error && searchApps.length === 0;

  useEffect(() => {
    if (!search) {
      setIsTyping(false);
      return;
    }
    setIsTyping(true);
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);
  return (
    <Container>
      <div>
        <div className="px-2 ">
          <h1 className="font-bold text-3xl text-center md:mt-20 mt-10 md:text-5xl text-[#001931]  ">
            Our All Applications
          </h1>
          <p
            className="text-[#627382] text-xl  font-normal lg:leading-20 md:leading-15 leading-8
            text-center"
          >
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between gap-2 items-center mt-2 mb-4 lg:px-8 md:px-5 px-5">
          <h1 className="font-semibold text-nowrap text-lg w-1/2  md:text-2xl text-[#001931]">
            (<span>{searchApps.length}</span>) Apps Found{" "}
          </h1>
          <div className="max-w-1/2">
            <label className="input  ">
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
                onChange={(e) => setSearch(e.target.value.trimStart())}
                className=" grow stroke-1 stroke-[#D2D2D2] input-ghost"
                placeholder="Search Apps"
              />
            </label>
          </div>
        </div>
        {noResults || error ? (
          <ErrorApp></ErrorApp>
        ) : (
          <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-3 lg:grid-cols-4 lg:p-8 md:p-5 p-5">
            {loading || isTyping ? (
              <div className="col-span-full">
                <div className="flex justify-center items-center">
                  <PropagateLoader color="#8e0cae"></PropagateLoader>
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
