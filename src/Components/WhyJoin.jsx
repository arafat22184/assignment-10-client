import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const WhyJoin = () => {
  const { theme } = use(AuthContext);

  return (
    <section
      className={`py-16 rounded-2xl mb-12 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${
        theme === "light" ? "bg-white" : "bg-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-6 ${
            theme === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          Why Join HobbyHub?
        </h2>

        <p
          className={`text-lg mb-12 ${
            theme === "light" ? "text-gray-600" : "text-gray-300"
          }`}
        >
          HobbyHub connects you with passionate people who share your hobbies —
          from painting and gaming to hiking and photography.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div
            className={`rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 border ${
              theme === "light"
                ? "bg-white border-gray-200"
                : "bg-gray-800 border-gray-700"
            }`}
          >
            <div className="text-3xl mb-4">🤝</div>
            <h3
              className={`text-xl font-semibold mb-2 ${
                theme === "light" ? "text-blue-600" : "text-blue-400"
              }`}
            >
              Meet Local Enthusiasts
            </h3>
            <p
              className={`${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Join events and meet people near you who love the same things.
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
            <div className="text-3xl mb-4">🚀</div>
            <h3
              className={`text-xl font-semibold mb-2 ${
                theme === "light" ? "text-green-600" : "text-green-400"
              }`}
            >
              Grow Your Skills
            </h3>
            <p
              className={`${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Attend hands-on sessions, workshops, and challenges with your
              group.
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
            <div className="text-3xl mb-4">💬</div>
            <h3
              className={`text-xl font-semibold mb-2 ${
                theme === "light" ? "text-purple-600" : "text-purple-400"
              }`}
            >
              Build Real Connections
            </h3>
            <p
              className={`${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Find your tribe. Make friends who encourage, inspire, and grow
              with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
