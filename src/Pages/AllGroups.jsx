import { useLoaderData } from "react-router";
import Group from "../Components/Group";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AllGroups = () => {
  const { theme } = use(AuthContext);
  const allGroups = useLoaderData();

  return (
    <div
      className={`min-w-full px-4 py-12 my-12 rounded-2xl transition-colors duration-300 ${
        theme === "light" ? "text-gray-900" : "text-white"
      }`}
    >
      <h1 className="text-4xl font-bold text-center mb-10">
        Explore All Groups
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allGroups.map((group) => (
          <Group key={group._id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default AllGroups;
