import React, { useEffect, useState, use } from "react";
import { useLoaderData } from "react-router";
import { format, isAfter, isEqual, parseISO, startOfToday } from "date-fns";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUserFriends, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const GroupDetails = () => {
  const { theme } = use(AuthContext);
  const group = useLoaderData();
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const today = startOfToday();
    const groupDate = parseISO(group.startDate);
    const isUpcoming = isAfter(groupDate, today) || isEqual(groupDate, today);
    setStatus(isUpcoming);
  }, [group]);

  const formattedDate = format(parseISO(group.startDate), "MMMM d, yyyy");

  return (
    <div
      className={`my-5 max-w-2xl mx-auto rounded-xl border transition-colors duration-300 ${
        theme === "light"
          ? "bg-white border-gray-200"
          : "bg-gray-800 border-gray-700"
      }`}
    >
      {/* Image */}
      <img
        src={group.imageUrl}
        alt={group.groupName}
        className="h-64 w-full object-cover rounded-t-xl"
      />

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Group Name */}
        <h2
          className={`text-2xl font-bold mb-2 ${
            theme === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          {group.groupName}
        </h2>

        {/* Hobby Category */}
        <p
          className={`text-sm font-medium mb-1 ${
            theme === "light" ? "text-indigo-600" : "text-indigo-400"
          }`}
        >
          {group.hobbyCategory}
        </p>

        {/* Description */}
        <p
          className={`mb-4 flex-grow ${
            theme === "light" ? "text-gray-700" : "text-gray-300"
          }`}
        >
          {group.description}
        </p>

        {/* Meeting Location */}
        <p
          className={`text-sm mb-1 flex items-center gap-1 ${
            theme === "light" ? "text-gray-600" : "text-gray-400"
          }`}
        >
          <FaMapMarkerAlt className="text-red-500" />
          {group.meetingLocation}
        </p>

        {/* Members & Date */}
        <div
          className={`flex justify-between items-center text-sm mb-4 ${
            theme === "light" ? "text-gray-600" : "text-gray-400"
          }`}
        >
          <span className="flex items-center gap-1">
            <FaUserFriends className="text-indigo-500" />
            {group.maxMembers} Members
          </span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt className="text-indigo-500" />
            {formattedDate}
          </span>
        </div>

        {/* Status Button */}
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
