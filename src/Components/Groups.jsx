import { use } from "react";
import { Link, useLoaderData } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import Group from "./Group";
import { AuthContext } from "../Provider/AuthProvider";

const Groups = () => {
  const { theme } = use(AuthContext);
  const groups = useLoaderData();

  return (
    <div
      className={`min-w-full px-4 py-12 my-12 rounded-2xl transition-colors duration-300 ${
        theme === "light"
          ? "bg-gray-50 text-gray-900"
          : "bg-gray-900 text-white"
      }`}
    >
      {/* Typewriter Heading */}
      <h1
        className={`text-4xl font-bold text-center mb-10 ${
          theme === "light" ? "text-gray-900" : "text-white"
        }`}
      >
        <Typewriter
          cursor
          cursorBlinking
          cursorColor="#7000ff"
          delaySpeed={1000}
          deleteSpeed={25}
          loop={0}
          typeSpeed={80}
          words={[
            "Explore All Groups",
            "Find Your Next Passion",
            "Connect Through Hobbies",
            "Join Communities That Inspire",
            "Discover Creative Circles",
            "Meet Like-Minded People",
            "Share What You Love",
            "Fuel Your Creativity",
            "Groups That Match Your Interests",
            "From Cooking to Coding",
            "Start Your Hobby Journey Today",
          ]}
        />
      </h1>

      {/* Group Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {groups.map((group) => (
          <Group key={group._id} group={group} />
        ))}
      </div>

      {/* All Groups Button */}
      <div className="flex justify-center">
        <Link
          to={"/groups"}
          className={`py-3 px-24 rounded-2xl font-extrabold mt-5 transition duration-300 ${
            theme === "light"
              ? "bg-indigo-600 hover:bg-indigo-700 text-white"
              : "bg-indigo-500 hover:bg-indigo-600 text-white"
          }`}
        >
          All Groups
        </Link>
      </div>
    </div>
  );
};

export default Groups;
