import React, { use } from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";

const MainLayout = () => {
  const { theme } = use(AuthContext);
  return (
    <div
      className={` ${
        theme === "light"
          ? "bg-gray-50 text-gray-900"
          : "bg-gray-900 text-white"
      }`}
    >
      {/* React Toastify */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="border-b border-primary">
        <Navbar></Navbar>
      </div>
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-450.75px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
