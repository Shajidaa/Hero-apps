import { Link, Links, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import gitHub from "../../assets/fi_2111432.png";
import Container from "./Container/Container";
const Navbar = () => {
  return (
    <div
      className=" bg-white stroke-1 
        stroke-[#E9E9E9] shadow-sm lg:p-2 p-1 md:p-4"
    >
      <Container>
        <div
          className="navbar 
         "
        >
          <div className="navbar-start">
            <Link
              to="/"
              className=" flex gap-1 flex-row justify-center items-center text-xl"
            >
              <span>
                <img className="size-10" src={logo} alt="" />
              </span>
              <span className="font-bold text-base gradient-text">HERO.IO</span>
            </Link>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1 ">
              <NavLink to="/">
                <li className="text ">Home</li>
              </NavLink>
              <NavLink to="/apps">
                <li className="text">Apps</li>
              </NavLink>
              <NavLink to="/installation">
                <li className="text ">Installation</li>
              </NavLink>
            </ul>
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  p-2 shadow"
            >
              <NavLink to="/">
                <li className="text">Home</li>
              </NavLink>
              <NavLink to="/apps">
                <li className="text">Apps</li>
              </NavLink>
              <NavLink to="/installation">
                <li className="text ">Installation</li>
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end md:flex hidden"></div>
          <Link
            to="https://github.com/Shajidaa"
            target="blank"
            className=" btn text-white 
     bg-linear-to-r from-[#632EE3] to-[#9F62F2]
     font-semibold md:font-bold text-sm md:text-base  "
          >
            {" "}
            <span>
              {" "}
              <img src={gitHub} alt="" />
            </span>{" "}
            Contribute
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
