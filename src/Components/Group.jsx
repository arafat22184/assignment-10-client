import React from "react";
import { Link } from "react-router";

const Group = ({ group }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <h2 className="text-2xl font-semibold mb-2">{group.name}</h2>
      <p className="text-gray-400 mb-4">{group.description}</p>
      <p className="text-sm text-gray-500 mb-4">Members: {group.members}</p>

      <Link
        to={`/groups/${group.id}`}
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition duration-300"
      >
        See More
      </Link>
    </div>
  );
};

export default Group;
