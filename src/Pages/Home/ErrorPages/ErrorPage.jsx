import React from "react";
import er from "../../../assets/error-404.png";
import { Link, Links } from "react-router";
import Navbar from "../../../Components/Header/Navbar";
import Footer from "../../../Components/Header/Footer/Footer";
const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="col-span-full grid-cols-1">
        <div className="flex  flex-col justify-center items-center   ">
          <div>
            <img src={er} alt="" />
          </div>
          <h1 className="font-bold text-3xl p-3 text-center  md:text-5xl text-[#001931]  ">
            Oops, page not found!
          </h1>
          <p
            className="text-[#627382] p-2 text-xl font-normal 
            text-center"
          >
            The page you are looking for is not available.
          </p>
          <Link
            to="/"
            className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
          >
            Go Back !
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
