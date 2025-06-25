import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
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
