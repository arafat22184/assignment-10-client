import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { MdLogout } from "react-icons/md";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut, setTheme } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleThemeChange = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const currentTheme = localStorage.getItem("theme");

  const handleSignOut = () => {
    setIsMenuOpen(false);
    logOut()
      .then(() => {
        toast.success("Sign out Successfully");
      })
      .catch(() => {
        toast.error("Oops! Something went wrong.");
      });
  };

  const navLinks = (
    <>
      <NavLink
        onClick={() => setIsMenuOpen(false)}
        to="/"
        className={({ isActive }) =>
          `hover:bg-blue-950 text-white px-2 py-1 rounded font-semibold  ${
            isActive ? "border-b-4 border-white" : ""
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        onClick={() => setIsMenuOpen(false)}
        to="/groups"
        className={({ isActive }) =>
          `hover:bg-blue-950 text-white px-2 py-1 rounded font-semibold  ${
            isActive ? "border-b-4 border-white" : ""
          }`
        }
      >
        All Groups
      </NavLink>
      <NavLink
        onClick={() => setIsMenuOpen(false)}
        to="/contactUs"
        className={({ isActive }) =>
          `hover:bg-blue-950 text-white px-2 py-1 rounded font-semibold  ${
            isActive ? "border-b-4 border-white" : ""
          }`
        }
      >
        Contact Us
      </NavLink>
      <NavLink
        onClick={() => setIsMenuOpen(false)}
        to="/about"
        className={({ isActive }) =>
          `hover:bg-blue-950 text-white px-2 py-1 rounded font-semibold  ${
            isActive ? "border-b-4 border-white" : ""
          }`
        }
      >
        About
      </NavLink>
    </>
  );

  const loginBtns = (
    <>
      <NavLink
        onClick={() => setIsMenuOpen(false)}
        to="/login"
        className={({ isActive }) =>
          `py-2 px-5 font-semibold rounded hover:bg-blue-950 hover:text-white border border-white ${
            isActive ? "bg-white text-indigo-600" : "bg-indigo-600 text-white"
          }`
        }
      >
        Login
      </NavLink>
      <NavLink
        onClick={() => setIsMenuOpen(false)}
        to="/register"
        className={({ isActive }) =>
          `py-2 px-5 font-semibold rounded hover:bg-blue-950 hover:text-white border border-white ${
            isActive ? "bg-white text-indigo-600" : "bg-indigo-600 text-white"
          }`
        }
      >
        Register
      </NavLink>
    </>
  );

  const logOutSection = (
    <>
      <img
        className="w-12 h-12 rounded-full border-2 border-white"
        src={user?.photoURL}
        alt="user"
        data-tooltip-id="tooltip-anchor-hide"
        data-tooltip-content={user?.email}
      />
      <Tooltip
        style={{ backgroundColor: "#7869BC", color: "#fff" }}
        id="tooltip-anchor-hide"
      />
      <button
        onClick={handleSignOut}
        className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 cursor-pointer"
      >
        Logout <MdLogout size={20} />
      </button>
    </>
  );

  return (
    <nav className="w-full shadow bg-[#605dff]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://i.ibb.co/DD0mYSJj/Hobby-Logo.png"
            alt="Logo"
            className="w-10 lg:w-12"
          />
          <span className="text-lg lg:text-xl font-bold text-white">
            HobbyHub
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-4">{navLinks}</div>

        <div className="hidden lg:flex items-center space-x-4">
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
              className="swap-on h-10 w-10 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off h-10 w-10 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {user ? logOutSection : loginBtns}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-3xl"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-4 flex flex-col">
          {navLinks}
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
              className="swap-on h-10 w-10 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off h-10 w-10 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {user ? logOutSection : loginBtns}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
