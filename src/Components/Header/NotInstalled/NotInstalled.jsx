import React from "react";
import img from "../../../assets/App-Error.png";
import { Link } from "react-router";
const NotInstalled = () => {
  return (
    <div className="flex  flex-col justify-center items-center">
      <div>
        <img src={img} alt="" />
      </div>
      <h1 className="font-bold text-3xl p-3 text-center  md:text-5xl text-[#001931]  ">
        No Applications are installed.
      </h1>
      <p
        className="text-[#627382] p-2 text-xl font-normal 
            text-center"
      >
        You don’t have any apps installed yet. Tap "See All Apps" to explore our
        collection and start adding apps that fit your lifestyle.
      </p>
      <Link
        to="/apps"
        className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
      >
        See All Apps !
      </Link>
    </div>
  );
};

export default NotInstalled;
