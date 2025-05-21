import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { MdLogout } from "react-icons/md";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut, setTheme } = use(AuthContext);

  const handleThemeChange = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const currentTheme = localStorage.getItem("theme");

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Sign out Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch(() => {
        toast.error("Oops! Something went wrong. Please try again later.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

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

  const logOutBtn = (
    <>
      <img
        className="w-14 h-14 rounded-full border-blue-500 border-4 "
        src={user?.photoURL}
        alt="user photo"
        data-tooltip-id="tooltip-anchor-hide"
        data-tooltip-content={user?.email}
        data-tooltip-delay-hide={1000}
      />
      <Tooltip
        style={{ backgroundColor: "#7869BC", color: "#ffff" }}
        id="tooltip-anchor-hide"
      />
      <button
        onClick={handleSignOut}
        className=" text-[18px] text-red-500 py-3 px-7 font-semibold border rounded cursor-pointer hover:bg-red-500 border-red-500 hover:text-white flex items-center gap-2"
      >
        Logout{" "}
        <span className="text-2xl">
          <MdLogout />
        </span>
      </button>
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
            {/* Theme */}
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                onChange={handleThemeChange}
                checked={currentTheme === "light" ? false : true}
                type="checkbox"
              />

              {/* sun icon */}
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            {user ? logOutBtn : loginLinks}
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
      <div className="navbar-end hidden lg:flex space-x-6">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            onChange={handleThemeChange}
            checked={currentTheme === "light" ? false : true}
            type="checkbox"
          />

          {/* sun icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {user ? logOutBtn : loginLinks}
      </div>
    </nav>
  );
};

export default Navbar;
