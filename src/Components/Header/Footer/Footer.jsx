import React from "react";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className=" bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white mt-20">
      <Container>
        <div className="footer sm:footer-horizontal  text-neutral-content lg:p-8 md:p-5 p-5">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
        <p className="text-center pb-5 p-10">
          Copyright © {new Date().getFullYear()} - All right reserved by Hero
          Industries Ltd
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
