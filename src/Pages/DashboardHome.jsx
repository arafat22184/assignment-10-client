import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaPlusCircle, FaLayerGroup, FaUsers, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useLoaderData } from "react-router";
import { differenceInDays, parseISO } from "date-fns";
import UpdateProfile from "./UpdateProfile";
import Group from "../Components/Group";
import CountUp from "react-countup";

const DashboardHome = () => {
  const initialGroups = useLoaderData();
  const { user, theme } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [joinedGroups, setJoinedGroups] = useState([]);

  useEffect(() => {
    fetch(
      `https://assignment-10-server-lac-sigma.vercel.app/joinedGroups?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setJoinedGroups(data))
      .catch((err) => console.error(err));
  }, [user.email]);

  // Calculate number of distinct hobby categories
  const uniqueCategories = new Set(initialGroups.map((g) => g.hobbyCategory))
    .size;

  // Calculate number of groups starting in the next 30 days
  const today = new Date();
  const upcomingGroups = initialGroups.filter((group) => {
    const startDate = parseISO(group.startDate);
    const daysUntilStart = differenceInDays(startDate, today);
    return daysUntilStart >= 0;
  });
  const upcomingGroupsCount = upcomingGroups.length;

  // Stats card definitions
  const cards = [
    {
      title: "Created Groups",
      count: initialGroups.length,
      icon: <FaLayerGroup className="text-indigo-500 text-2xl" />,
      border: "border-indigo-600",
      cardBg: theme === "light" ? "bg-indigo-100" : "bg-indigo-900/20",
    },
    {
      title: "Joined Groups",
      count: joinedGroups.length,
      icon: <FaUsers className="text-green-500 text-2xl" />,
      border: "border-green-500",
      cardBg: theme === "light" ? "bg-green-100" : "bg-green-900/20",
    },
    {
      title: "Unique Categories",
      count: uniqueCategories,
      icon: <FaPlusCircle className="text-purple-500 text-2xl" />,
      border: "border-purple-500",
      cardBg: theme === "light" ? "bg-purple-100" : "bg-purple-900/20",
    },
    {
      title: "Upcoming Groups",
      count: upcomingGroupsCount,
      icon: <FaClock className="text-pink-500 text-2xl" />,
      border: "border-pink-500",
      cardBg: theme === "light" ? "bg-pink-100" : "bg-pink-900/20",
    },
  ];

  // Theme-based classes for backgrounds and text
  const bg = theme === "light" ? "bg-white" : "bg-gray-900";
  const text = theme === "light" ? "text-gray-800" : "text-gray-200";

  return (
    <div>
      <div className="flex flex-col xl:flex-row gap-4">
        {/* USER INFO */}
        <div
          className={`px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto ${bg} rounded-xl shadow-md bg-cover xl:py-20 bg-no-repeat flex flex-col items-center gap-6 w-full`}
          style={{
            backgroundImage: `url('https://i.ibb.co/840Mr2FT/userBg.jpg')`,
          }}
        >
          <img
            className="w-32 rounded-full border-4 border-white shadow-lg"
            src={user?.photoURL}
            alt="User Avatar"
          />
          <div className="text-center space-y-4 ">
            <h2 className={`text-2xl sm:text-3xl font-bold text-white`}>
              Welcome back,{" "}
              <span className="text-indigo-500">
                {user?.displayName || "Hobbyist"}!
              </span>
            </h2>
            <p
              className={`text-sm sm:text-base text-white flex justify-center`}
            >
              <MdEmail className="inline mr-1 text-indigo-400" size={20} />{" "}
              <span className="font-medium">{user?.email || "N/A"}</span>
            </p>
            <button
              className="btn btn-primary text-white"
              onClick={() => setShowModal(true)}
            >
              Update Profile
            </button>
          </div>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
            <UpdateProfile setShowModal={setShowModal} />
          </div>
        )}

        {/* STATS CARDS */}
        <div
          className={`px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto ${bg} rounded-xl shadow-md w-full`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-4 p-6 rounded-xl border ${card.border} ${card.cardBg} transition hover:shadow-lg`}
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md ${
                    theme === "light" ? "bg-black" : "bg-white"
                  }`}
                >
                  {card.icon}
                </div>
                <div>
                  <h4 className={`text-sm font-semibold ${text}`}>
                    {card.title}
                  </h4>
                  <p
                    className={`text-2xl font-bold ${
                      theme === "light" ? "text-gray-900" : "text-white"
                    }`}
                  >
                    <CountUp end={card.count} duration={1.5} />
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/dashboard/createGroup" className="btn btn-primary gap-2">
              <FaPlusCircle /> Create New Group
            </Link>
            <Link to="/dashboard/myGroups" className="btn btn-outline gap-2">
              <FaLayerGroup /> View My Groups
            </Link>
          </div>
        </div>
      </div>

      {/* UPCOMING GROUPS */}
      <div
        className={`mt-6 py-10 px-3 xl:px-6 rounded-xl ${
          theme === "light"
            ? "bg-white text-gray-900 border border-gray-200"
            : "bg-gray-900 text-white"
        }`}
      >
        <h1 className="text-center font-extrabold text-3xl mb-6">
          Your Upcoming Groups
        </h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {upcomingGroups.map((group) => (
            <Group key={group._id} group={group} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
