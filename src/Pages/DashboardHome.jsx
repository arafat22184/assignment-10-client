import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaPlusCircle, FaLayerGroup, FaUsers, FaClock } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { differenceInDays, parseISO } from "date-fns";
import UpdateProfile from "./UpdateProfile";
import Group from "../Components/Group";

const DashboardHome = () => {
  const initialGroups = useLoaderData();
  const { user, theme } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [joinedGroups, setJoinedGroups] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/joinedGroups?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJoinedGroups(data);
      })
      .catch((err) => {
        console.error(err);
      });
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

  // Data for chart
  const data = [
    {
      name: "Groups",
      Created: initialGroups.length,
      Joined: Array.isArray(joinedGroups) ? joinedGroups.length : 0,
      Categories: uniqueCategories,
      Upcoming: upcomingGroupsCount,
    },
  ];

  const colors = {
    Created: theme === "light" ? "#3B82F6" : "#60A5FA",
    Joined: theme === "light" ? "#10B981" : "#34D399",
    MaxCapacity: theme === "light" ? "#F59E0B" : "#FBBF24",
    Categories: theme === "light" ? "#8B5CF6" : "#A78BFA",
    Upcoming: theme === "light" ? "#EC4899" : "#F472B6",
  };

  const bg = theme === "light" ? "bg-white" : "bg-gray-800";
  const text = theme === "light" ? "text-gray-800" : "text-white";

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={`bg-white dark:bg-gray-900 p-3 rounded shadow-lg`}>
          <p className="font-bold mb-2">{label}</p>
          {payload.map((entry) => (
            <p key={entry.name} style={{ color: entry.color }}>
              {entry.name}: <strong>{entry.value}</strong>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <div className="flex flex-col xl:flex-row gap-4">
        {/* USER INFO */}
        <div
          className={`px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto ${bg} rounded-xl shadow-md bg-cover xl:py-20 bg-no-repeat w-full flex flex-col items-center gap-6`}
          style={{
            backgroundImage: `url('https://i.ibb.co/840Mr2FT/userBg.jpg')`,
          }}
        >
          <img
            className="w-32 rounded-full border-4 border-white shadow-lg"
            src={user?.photoURL}
            alt="User Avatar"
          />

          <div className="text-center space-y-4">
            <h2 className={`text-2xl sm:text-3xl font-bold text-white ${text}`}>
              Welcome back,{" "}
              <span className="text-indigo-500">
                {user?.displayName || "Hobbyist"}!
              </span>
            </h2>

            <p className={`text-sm sm:text-base text-white ${text}`}>
              <FaUsers className="inline mr-1 text-primary" />
              Email: <span className="font-medium">{user?.email || "N/A"}</span>
            </p>

            <p className={`text-sm sm:text-base text-white ${text}`}>
              <FaClock className="inline mr-1 text-primary" />
              Active Groups:{" "}
              <span className="font-semibold">{initialGroups.length}</span> |
              Unique Categories:{" "}
              <span className="font-semibold">{uniqueCategories}</span> |
              Upcoming Events:{" "}
              <span className="font-semibold">{upcomingGroupsCount}</span>
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

        <div
          className={`px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto ${bg} rounded-xl shadow-md w-full`}
        >
          <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer>
              <BarChart
                data={data}
                margin={{ top: 20, right: 40, left: 20, bottom: 20 }}
                barCategoryGap="15%"
                barGap={6}
              >
                <CartesianGrid
                  stroke={theme === "light" ? "#e5e7eb" : "#374151"}
                  strokeDasharray="3 3"
                />
                <XAxis
                  dataKey="name"
                  tick={{ fill: text.replace("text-", "") }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  allowDecimals={false}
                  tick={{ fill: text.replace("text-", "") }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign="top" height={36} />
                <Bar
                  dataKey="Created"
                  fill={colors.Created}
                  radius={[10, 10, 0, 0]}
                  animationDuration={1000}
                />
                <Bar
                  dataKey="Joined"
                  fill={colors.Joined}
                  radius={[10, 10, 0, 0]}
                  animationDuration={1000}
                />
                <Bar
                  dataKey="Categories"
                  fill={colors.Categories}
                  radius={[10, 10, 0, 0]}
                  animationDuration={1000}
                />
                <Bar
                  dataKey="Upcoming"
                  fill={colors.Upcoming}
                  radius={[10, 10, 0, 0]}
                  animationDuration={1000}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

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
      {/* Upcomming Groups */}
      <div
        className={`mt-6 py-10 px-3 xl:px-6 rounded-xl ${
          theme === "light"
            ? "bg-white text-gray-900 border border-gray-200"
            : "bg-gray-900 text-white"
        }`}
      >
        <h1 className="text-center font-extrabold text-3xl mb-6">
          Your Upcomming Groups
        </h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {upcomingGroups.map((group) => (
            <Group key={group._id} group={group}></Group>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
