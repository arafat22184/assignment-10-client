import { use } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import {
  FaHome,
  FaTachometerAlt,
  FaLayerGroup,
  FaPlusCircle,
} from "react-icons/fa";

const DashboardLayout = () => {
  const { user } = use(AuthContext);
  return (
    <div className="drawer drawer-mobile lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col min-h-screen">
        {/* Mobile Navbar */}
        <div className="navbar bg-base-200 shadow-md lg:hidden">
          <div className="flex-none">
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="flex-1 text-xl font-semibold px-4">Dashboard</div>
        </div>

        {/* Main Content */}
        <main className="w-full px-4 py-6 max-w-7xl mx-auto">
          <Outlet />
        </main>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-40">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <aside className="menu bg-indigo-600 w-52 min-h-full p-4 space-y-4 text-base-content">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 mb-4">
            <img
              src="https://i.ibb.co/DD0mYSJj/Hobby-Logo.png"
              alt="Logo"
              className="w-10 lg:w-12"
            />
            <span className="text-lg lg:text-xl font-bold text-white">
              HobbyHub
            </span>
          </Link>

          <div className="flex flex-col items-center gap-3 text-center">
            <img
              className="rounded-full border-4 border-white w-24"
              src={user?.photoURL}
              alt="User Photo"
            />
            <div>
              <p className="text-2xl font-bold text-white">
                {user?.displayName}
              </p>
              <p className="text-sm text-slate-300">{user?.email}</p>
            </div>
          </div>

          {/* Nav Links */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:bg-blue-950 text-white px-2 py-1 rounded font-semibold flex items-center gap-2 ${
                  isActive ? "bg-base-100" : ""
                }`
              }
            >
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              to="/dashboard"
              className={({ isActive }) =>
                `hover:bg-blue-950 px-2 py-1 rounded font-semibold text-white flex items-center gap-2 ${
                  isActive ? "bg-indigo-500 " : ""
                }`
              }
            >
              <FaTachometerAlt /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="myGroups"
              className={({ isActive }) =>
                `hover:bg-blue-950 px-2 py-1 rounded font-semibold text-white flex items-center gap-2 ${
                  isActive ? "bg-indigo-500 " : ""
                }`
              }
            >
              <FaLayerGroup /> My Groups
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/createGroup"
              className={({ isActive }) =>
                `hover:bg-blue-950 px-2 py-1 rounded font-semibold text-white flex items-center gap-2 ${
                  isActive ? "bg-indigo-500 " : ""
                }`
              }
            >
              <FaPlusCircle /> Create Group
            </NavLink>
          </li>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
