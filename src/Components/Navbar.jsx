import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          `hover:bg-primary text-[18px] hover:text-white py-3 px-7 font-semibold rounded ${
            isActive ? "border-b-4 rounded-none border-primary" : ""
          }`
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:bg-primary text-[18px] hover:text-white py-3 px-7 font-semibold rounded ${
            isActive ? "border-b-4 rounded-none border-primary" : ""
          }`
        }
        to={"/groups"}
      >
        All Groups
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:bg-primary text-[18px] hover:text-white py-3 px-7 font-semibold rounded ${
            isActive ? "border-b-4 rounded-none border-primary" : ""
          }`
        }
        to={"/createGroup"}
      >
        Create Group
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `hover:bg-primary text-[18px] hover:text-white py-3 px-7 font-semibold rounded ${
            isActive ? "border-b-4 rounded-none border-primary" : ""
          }`
        }
        to={"/myGroups"}
      >
        My Groups
      </NavLink>
    </>
  );
  const loginLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          `bg-primary text-[18px]  py-3 px-7 font-semibold hover:bg-primary hover:text-white rounded ${
            isActive
              ? "text-white"
              : "border-2 border-primary bg-white text-primary"
          }`
        }
        to={"/login"}
      >
        Login
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `bg-primary text-[18px]  py-3 px-7 font-semibold hover:bg-primary hover:text-white rounded ${
            isActive
              ? "text-white"
              : "border-2 border-primary bg-white text-primary"
          }`
        }
        to={"/register"}
      >
        Register
      </NavLink>
    </>
  );

  return (
    <nav className="navbar max-w-11/12 mx-auto">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3"
          >
            {links}
          </ul>
        </div>
        <Link className="flex items-center gap-5" to={"/"}>
          <img
            className="w-20"
            src={
              "https://i.ibb.co.com/YTLkKY8d/Chat-GPT-Image-May-20-2025-01-59-22-AM.png"
            }
            alt="Logo"
          />
          <p className="text-primary font-extrabold text-2xl">HobbyHub</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu space-x-8 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end hidden lg:flex space-x-6">{loginLinks}</div>
    </nav>
  );
};

export default Navbar;
