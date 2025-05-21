import React from "react";
import { Link } from "react-router";
import Navbar from "../Components/Navbar";

const ErrorPage = () => {
  return (
    <div>
      <div className="border-b border-primary">
        <Navbar></Navbar>
      </div>
      <div className="max-w-7xl mx-auto my-9 px-4 py-4">
        <div className="flex flex-col  justify-center items-center">
          <img
            className="w-72 md:w-96 rounded-xl mb-4"
            src="https://i.ibb.co.com/jvjjx0T7/robot-error-img.png"
            alt="error-image"
          />
          <h1 className="text-6xl text-center font-extrabold text-red-500">
            404-Page Not Found
          </h1>
          <p className="my-4 text-center">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link
            to={"/"}
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-white font-bold rounded-xl"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;
