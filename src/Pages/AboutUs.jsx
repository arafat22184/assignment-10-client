import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AboutUs = () => {
  const { theme } = useContext(AuthContext);

  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const subTextColor = theme === "light" ? "text-gray-600" : "text-gray-300";
  const cardBg =
    theme === "light"
      ? "bg-white border-gray-200"
      : "bg-gray-800 border-gray-700";

  return (
    <section className="my-12 px-4 md:px-8 lg:px-16 mb-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>
            About HobbyHub
          </h2>
          <p className={`text-lg ${subTextColor}`}>
            HobbyHub is more than just a platform — it's a vibrant community
            where people come together to explore, share, and grow their hobbies
            with others.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className={`rounded-xl border p-6 shadow-md hover:shadow-lg transition duration-300 ${cardBg}`}
          >
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-500">
              Our Mission
            </h3>
            <p className={`${subTextColor}`}>
              To connect hobbyists of all kinds — from artists to adventurers —
              and provide a welcoming space to thrive together.
            </p>
          </div>

          <div
            className={`rounded-xl border p-6 shadow-md hover:shadow-lg transition duration-300 ${cardBg}`}
          >
            <div className="text-3xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold mb-2 text-green-500">
              Our Vision
            </h3>
            <p className={`${subTextColor}`}>
              To become the go-to hub for hobby lovers by promoting creativity,
              collaboration, and real-world friendships.
            </p>
          </div>

          <div
            className={`rounded-xl border p-6 shadow-md hover:shadow-lg transition duration-300 ${cardBg}`}
          >
            <div className="text-3xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2 text-purple-500">
              Why It Matters
            </h3>
            <p className={`${subTextColor}`}>
              Hobbies bring joy, reduce stress, and build strong communities —
              and we're here to make that happen together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
