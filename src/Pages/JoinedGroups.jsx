import { Link, useLoaderData } from "react-router";
import Group from "../Components/Group";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const JoinedGroups = () => {
  const groups = useLoaderData();
  const { theme } = useContext(AuthContext);

  return (
    <div
      className={`mt-6 py-10 px-3 xl:px-6 rounded-xl ${
        theme === "light"
          ? "bg-white text-gray-900 border border-gray-200"
          : "bg-gray-900 text-white"
      }`}
    >
      <h1 className="text-center font-extrabold text-3xl mb-6">
        Your Connected Hobbies
      </h1>

      {groups.length === 0 ? (
        <div className="flex flex-col items-center gap-6">
          <p className="text-center text-lg sm:text-2xl text-gray-400">
            You haven't Joined any groups yet.
          </p>
          <Link
            to={"/groups"}
            className="btn bg-indigo-600 hover:bg-indigo-700"
          >
            Explore Groups
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {groups.map((group) => (
            <Group key={group._id} group={group}></Group>
          ))}
        </div>
      )}
    </div>
  );
};

export default JoinedGroups;
