import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="border-b border-primary">
        <Navbar></Navbar>
      </div>
      <div className="max-w-11/12 mx-auto min-h-[calc(100vh-450.75px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
