import { useContext } from "react";
import { Link } from "react-router";
import { format, parseISO } from "date-fns";
import { FaUserFriends, FaCalendarAlt } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const Group = ({ group }) => {
  const { theme } = useContext(AuthContext);
  const formattedDate = format(parseISO(group.startDate), "dd MMM yyyy");

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-white border-gray-200"
          : "bg-gray-800 border-gray-700"
      } border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col`}
    >
      {/* Image */}
      <img
        src={group.imageUrl}
        alt={group.groupName}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Group Name */}
        <h2
          className={`${
            theme === "light" ? "text-gray-900" : "text-white"
          } text-2xl font-bold mb-2`}
        >
          {group.groupName}
        </h2>

        {/* Hobby Category */}
        <p
          className={`${
            theme === "light" ? "text-indigo-600" : "text-indigo-400"
          } text-sm font-medium mb-2`}
        >
          {group.hobbyCategory}
        </p>

        {/* Members & Start Date */}
        <div
          className={`flex justify-between items-center text-sm ${
            theme === "light" ? "text-gray-600" : "text-gray-400"
          } mb-4`}
        >
          <span className="flex items-center gap-1">
            <FaUserFriends className="text-indigo-500" /> {group.maxMembers}{" "}
            Members
          </span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-indigo-500" /> {formattedDate}
          </span>
        </div>

        {/* See More Button */}
        <Link
          to={`/groups/${group._id}`}
          className="mt-auto inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-center px-4 py-2 rounded-md transition duration-300"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default Group;
