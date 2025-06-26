import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {
  FaPlusCircle,
  FaLayerGroup,
  FaUsers,
  FaPalette,
  FaClock,
} from "react-icons/fa";
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

const DashboardHome = () => {
  const initialGroups = useLoaderData();
  const { user, theme } = useContext(AuthContext);

  // Calculate total max members capacity (sum of maxMembers)
  const totalMaxMembers = initialGroups.reduce(
    (acc, group) => acc + Number(group.maxMembers || 0),
    0
  );

  // Calculate number of distinct hobby categories
  const uniqueCategories = new Set(initialGroups.map((g) => g.hobbyCategory))
    .size;

  // Calculate number of groups starting in the next 30 days
  const today = new Date();
  const upcomingGroupsCount = initialGroups.filter((group) => {
    const startDate = parseISO(group.startDate);
    const daysUntilStart = differenceInDays(startDate, today);
    return daysUntilStart >= 0;
  }).length;

  // Data for chart
  const data = [
    {
      name: "Groups",
      Created: initialGroups.length,
      Joined: 12, // placeholder, change if you have real data
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
    <div
      className={`px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto ${bg} rounded-xl shadow-md`}
    >
      <h2 className={`text-2xl sm:text-3xl font-bold mb-6 text-center ${text}`}>
        Welcome back,{" "}
        <span className="text-primary">{user?.displayName || "Hobbyist"}!</span>
      </h2>

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

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
        <Link to="/create-group" className="btn btn-primary gap-2">
          <FaPlusCircle /> Create New Group
        </Link>
        <Link to="/dashboard/myGroups" className="btn btn-outline gap-2">
          <FaLayerGroup /> View My Groups
        </Link>
      </div>
    </div>
  );
};

export default DashboardHome;
