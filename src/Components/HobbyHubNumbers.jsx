import React, { use } from "react";
import CountUp from "react-countup";
import { AuthContext } from "../Provider/AuthProvider";

const HobbyHubNumbers = () => {
  const { theme } = use(AuthContext);

  return (
    <section
      className={`py-16 mb-12 rounded-2xl px-4 md:px-8 lg:px-16 transition-colors duration-300 ${
        theme === "light" ? "bg-white" : "bg-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2
          className={`text-3xl md:text-4xl font-bold mb-6 ${
            theme === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          HobbyHub in Numbers
        </h2>
        <p
          className={`text-lg mb-12 ${
            theme === "light" ? "text-gray-600" : "text-gray-300"
          }`}
        >
          A quick look at the growth and activity of our hobby-loving community.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div
            className={`rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 border ${
              theme === "light"
                ? "bg-white border-gray-200"
                : "bg-gray-800 border-gray-700"
            }`}
          >
            <h3 className="text-5xl font-bold text-indigo-600 mb-4">
              <CountUp end={1200} duration={2.5} />+
            </h3>
            <p
              className={`text-xl font-semibold mb-2 ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
            >
              Members Joined
            </p>
            <p
              className={`${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Hundreds of users are joining every week to discover new hobbies.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className={`rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 border ${
              theme === "light"
                ? "bg-white border-gray-200"
                : "bg-gray-800 border-gray-700"
            }`}
          >
            <h3 className="text-5xl font-bold text-emerald-500 mb-4">
              <CountUp end={350} duration={2.5} />+
            </h3>
            <p
              className={`text-xl font-semibold mb-2 ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
            >
              Groups Created
            </p>
            <p
              className={`${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              A variety of groups focused on art, fitness, books, and more.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className={`rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 border ${
              theme === "light"
                ? "bg-white border-gray-200"
                : "bg-gray-800 border-gray-700"
            }`}
          >
            <h3 className="text-5xl font-bold text-pink-500 mb-4">
              <CountUp end={75} duration={2.5} />+
            </h3>
            <p
              className={`text-xl font-semibold mb-2 ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
            >
              Meetups Hosted
            </p>
            <p
              className={`${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Real-world and virtual events hosted every month by group members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbyHubNumbers;
