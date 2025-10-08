import React from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="text-[16px] font-semibold text-[#632EE3]">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-[#000000E5] text-[16px] font-medium">
              <NavLink to="/apps">Apps</NavLink>
            </li>
            <li className="text-[#000000E5] text-[16px] font-medium">
              <NavLink to="/installation">Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-1">
          <img className="w-[40px] h-[40px ]" src={logoImg} alt="" />
          <Link to="/" className="text-xl text-[16px] font-bold text-[#632EE3]">
            HERO.IO
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-[16px] font-semibold text-[#632EE3]">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="text-[#000000E5] text-[16px] font-medium">
            <NavLink to="/apps">Apps</NavLink>
          </li>
          <li className="text-[#000000E5] text-[16px] font-medium">
            <NavLink to="/installation">Installation</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end py-3 px-4">
        <div className="bg-[linear-gradient(125deg,_#632EE3_5.68%,_#9F62F2_88.38%)] px-4 py-3 flex items-center gap-2.5 rounded-[4px]">
          <FaGithub className="text-[20px] text-white" />
          <NavLink
            to="https://github.com/Arnisha233"
            className="text-[16px] font-semibold text-[#FFFFFF]"
          >
            Contribute
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
