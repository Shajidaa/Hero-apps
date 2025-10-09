import React from "react";
import Container from "../Container/Container";
import { Link } from "react-router";
import googlePlay from "../../../assets/Group (2).png";
import store from "../../../assets/fi_5977575.png";
import hero from "../../../assets/hero.png";
const Banner = () => {
  return (
    <Container>
      <div className="flex  flex-col justify-center items-center gap-2 lg:gap-3 mt-10 md:mt-20">
        <h1 className=" md:text-7xl text-4xl font-bold text-[#001931] text-center">
          We Build <br />{" "}
          <span className=" md:!text-7xl !text-4xl gradient-text">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-[#627382] p-4 lg:text-xl md:text-lg text-base font-normal  text-center">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="lg:my-10 md:my-6 my-3">
          <Link
            to="https://play.google.com/store/apps?hl=en"
            className="btn  gap-2 stroke-1 stroke-[#627382]
             text-[#001931] font-semibold text-xl md:mr-4 "
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
             text-[#001931] font-semibold text-xl  "
          >
            {" "}
            <span>
              <img src={store} alt="" className="" />
            </span>
            App Store
          </Link>
        </div>
        <img src={hero} alt="" />
      </div>
    </Container>
  );
};

export default Banner;
