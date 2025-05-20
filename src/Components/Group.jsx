import React from "react";
import { Link } from "react-router";
import { format, parseISO } from "date-fns";

const Group = ({ group }) => {
  const formattedDate = format(parseISO(group.startDate), "MMMM d, yyyy");

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col">
      {/* Image */}
      <img
        src={group.imageUrl}
        alt={group.groupName}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Group Name */}
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          {group.groupName}
        </h2>

        {/* Hobby Category */}
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-1">
          {group.hobbyCategory}
        </p>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
          {group.description}
        </p>

        {/* Meeting Location */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          📍 {group.meetingLocation}
        </p>

        {/* Members & Date */}
        <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
          <span>👥 {group.maxMembers} Members</span>
          <span>📅 {formattedDate}</span>
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
