import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { format, isAfter, isEqual, parseISO, startOfToday } from "date-fns";

const GroupDetails = () => {
  const group = useLoaderData();
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const today = startOfToday();

    const groupDate = parseISO(group.startDate);
    const upcomingGroups =
      isAfter(groupDate, today) || isEqual(groupDate, today);
    upcomingGroups ? setStatus(true) : setStatus(false);
  }, [group]);

  const formattedDate = format(parseISO(group.startDate), "MMMM d, yyyy");
  return (
    <div className="my-5 bg-white max-w-2xl mx-auto dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl">
      {/* Image */}
      <img
        src={group.imageUrl}
        alt={group.groupName}
        className="h-64 w-full object-cover"
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

        {status ? (
          <button className="mt-auto inline-block bg-green-600 hover:bg-green-700 text-white text-center px-4 py-2 rounded-md transition duration-300 cursor-pointer">
            Join Group
          </button>
        ) : (
          <button className="mt-auto inline-block bg-red-600 hover:bg-red-700 text-white text-center px-4 py-2 rounded-md transition duration-300 cursor-pointer">
            Group is no longer Active
          </button>
        )}
      </div>
    </div>
  );
};

export default GroupDetails;
