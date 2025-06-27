import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { format, isAfter, isEqual, parseISO, startOfToday } from "date-fns";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUserFriends, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const GroupDetails = () => {
  const { theme, user } = useContext(AuthContext);
  const group = useLoaderData();
  const [isUpcoming, setIsUpcoming] = useState(true);
  const isAuthor = group.email === user.email;
  const [isJoined, setIsJoined] = useState(
    group?.members?.map((member) => member === user.email)[0] || false
  );

  useEffect(() => {
    const today = startOfToday();
    const groupDate = parseISO(group?.startDate);
    const valid = isAfter(groupDate, today) || isEqual(groupDate, today);
    setIsUpcoming(valid);
  }, [group]);

  const formattedDate = group?.startDate
    ? format(parseISO(group.startDate), "MMMM d, yyyy")
    : "N/A";

  const handleJoinGroup = () => {
    if (isAuthor) {
      toast.error("Oops! You can't join a group you created.");
      return;
    }
    const groupId = group._id;
    const userEmail = user.email;
    const groupData = { groupId, userEmail };

    if (isJoined) {
      fetch("https://assignment-10-server-lac-sigma.vercel.app/joinGroup", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
        body: JSON.stringify(groupData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deleteRecord.deletedCount) {
            toast.success("You have successfully left the group.");
            setIsJoined(false);
          }
        })
        .catch((error) => {
          if (error) {
            toast.error("Something went wrong");
          }
        });
      return;
    }

    fetch("https://assignment-10-server-lac-sigma.vercel.app/joinGroup", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(groupData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.joinRecord?.insertedId) {
          toast.success("Group Joined Successfully");
          setIsJoined(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className={`my-10 max-w-3xl mx-auto rounded-xl overflow-hidden border shadow transition-colors duration-300 ${
        theme === "light"
          ? "bg-white border-gray-200 text-gray-900"
          : "bg-gray-800 border-gray-700 text-white"
      }`}
    >
      {/* Group Banner Image */}
      <img
        src={group?.imageUrl || "https://via.placeholder.com/600x300"}
        alt={group?.groupName || "Group Image"}
        className="w-full h-64 object-cover"
      />

      {/* Group Content */}
      <div className="p-6 space-y-4">
        {/* Group Title */}
        <h2 className="text-3xl font-bold">{group?.groupName}</h2>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <img
            src={group?.userPhotoURL || "https://i.pravatar.cc/40"}
            alt={group?.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
          />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Author</p>
            <h4 className="font-semibold text-base">{group?.name}</h4>
          </div>
        </div>

        {/* Category Tag */}
        <p
          className={`inline-block text-sm font-medium px-3 py-1 rounded-full ${
            theme === "light"
              ? "bg-indigo-100 text-indigo-700"
              : "bg-indigo-600/20 text-indigo-300"
          }`}
        >
          {group?.hobbyCategory || "Uncategorized"}
        </p>

        {/* Description */}
        <p className="leading-relaxed">
          {group?.description || "No description provided."}
        </p>

        {/* Meeting Location */}
        {group?.meetingLocation && (
          <p className="flex items-center gap-2 text-sm">
            <FaMapMarkerAlt className="text-red-500" />
            {group.meetingLocation}
          </p>
        )}

        {/* Date & Members */}
        <div className="flex justify-between text-sm items-center">
          <div className="flex items-center gap-2">
            <FaUserFriends className="text-indigo-500" />
            <span>{group?.maxMembers || 0} Members</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-indigo-500" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Status Button */}
        <button
          disabled={!isUpcoming}
          onClick={handleJoinGroup}
          className={`w-full py-2 rounded-md text-white font-semibold transition duration-300 cursor-pointer ${
            isUpcoming
              ? isJoined
                ? "bg-red-500"
                : "bg-green-600 hover:bg-green-700"
              : "bg-gray-500 cursor-not-allowed"
          }`}
        >
          {isUpcoming
            ? isJoined
              ? "Leave Group"
              : "Join Group"
            : "Group is no longer Active"}
        </button>
      </div>
    </div>
  );
};

export default GroupDetails;
