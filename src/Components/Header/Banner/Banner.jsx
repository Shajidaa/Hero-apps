import React from "react";
import Container from "../Container/Container";
import { Link } from "react-router";
import googlePlay from "../../../assets/Group (2).png";
import store from "../../../assets/fi_5977575.png";
import hero from "../../../assets/hero.png";
const Banner = () => {
  return (
    <div>
      <Container>
        <div className="flex  flex-col justify-center items-center gap-2 lg:gap-3 mt-10 md:mt-20">
          <h1 className=" md:text-7xl text-4xl font-bold text-[#001931] text-center">
            We Build <br />{" "}
            <span className=" md:!text-7xl !text-4xl gradient-text">
              Productive
            </span>{" "}
            Apps
          </h1>
          <p className="text-[#627382]  lg:text-xl md:text-lg text-base font-normal max-w-[90%] lg:max-w-[75%] text-center">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="lg:my-10 md:my-6 my-3 ">
            <Link
              to="https://play.google.com/store/apps?hl=en"
              className="btn  gap-2 stroke-1 stroke-[#627382]
             text-[#001931] font-semibold text-sm md:text-xl md:mr-4 mr-1 "
            >
              {" "}
              <span>
                <img src={googlePlay} alt="" className="" />
              </span>
              Google Play
            </Link>
            <Link
              to="https://www.apple.com/store"
              className="btn  gap-2 stroke-1 stroke-[#627382]
             text-[#001931] font-semibold text-sm md:text-xl  "
            >
              {" "}
              <span>
                <img src={store} alt="" className="" />
              </span>
              App Store
            </Link>
          </div>
          <img className="pt-3 pl-3 pr-3 pb-0" src={hero} alt="" />
        </div>
      </Container>
      <div
        className=" text-white 
     bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
      >
        {" "}
        <Container>
          <div className="md:p-12 p-5">
            <h1 className="text-center font-bold md:text-4xl text-2xl  ">
              Trusted by Millions, Built for You
            </h1>
            <div className="grid md:grid-cols-3 items-center gap-6 grid-cols-1 pb-10 md:pd-20  pt-10">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-base font-normal">Total Downloads</h1>
                <p className=" text-4xl md:text-6xl font-extrabold">29.6M</p>
                <p className="text-base font-normal text-center">
                  {" "}
                  21% more than last month
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-base font-normal">Total Reviews</h1>
                <p className=" text-4xl md:text-6xl font-extrabold">906K</p>
                <p className="text-base font-normal text-center">
                  46% more than last month
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-base font-normal">Active Apps</h1>
                <p className=" text-4xl md:text-6xl font-extrabold">132+</p>
                <p className="text-base font-normal text-center">
                  31 more will Launch
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
