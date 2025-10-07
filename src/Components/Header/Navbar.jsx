import React from 'react';
import { Link, Links, NavLink } from 'react-router';
import logo from "../../assets/logo.png"
const Navbar = () => {
    // const links=
    //     {<li>ld</li>}
    
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       <NavLink to='/'><li>Home</li></NavLink>
       <NavLink to='/apps'><li>Apps</li></NavLink>
       <NavLink to='/installation'><li>Installation</li></NavLink>
      </ul>
    </div>
    <Link to='/'  className="btn btn-ghost text-xl">
    <span><img className='size-10' src={logo} alt="" /></span>
   <span className='font-bold text-base gradient-text'>HERO.IO</span> 
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      <NavLink  className='ml-8'   to='/'><li>Home</li></NavLink>
       <NavLink className='ml-8' to='/apps'><li>Apps</li></NavLink>
       <NavLink className='ml-8' to='/installation'><li>Installation</li></NavLink>
    </ul>
  </div>
  <div className="navbar-end">

    <Link to='https://github.com/Shajidaa'
     target='blank' className="btn">Contribute</Link>
  </div>
</div>
    );
};

export default Navbar;