import React from "react";
import Navbar from "../Components/Header/Navbar";
import { Outlet } from "react-router";
import Container from "../Components/Header/Container/Container";
import { isRouteErrorResponse, useRouteError } from "react-router";
import ErrorPage from "../Pages/Home/ErrorPages/ErrorPage";
import Footer from "../Components/Header/Footer/Footer";
import Banner from "../Components/Header/Banner/Banner";

const MainLayouts = () => {
  const error = useRouteError();
  return (
    <div>
      <Navbar></Navbar>

      {isRouteErrorResponse(error) ? (
        <ErrorPage></ErrorPage>
      ) : (
        <Outlet></Outlet>
      )}
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
