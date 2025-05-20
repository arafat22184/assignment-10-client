import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { isAfter, isEqual, parseISO, startOfToday } from "date-fns";
import Group from "../Components/Group";

const AllGroups = () => {
  const allGroups = useLoaderData();
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const today = startOfToday();

    const upcomingGroups = allGroups.filter((group) => {
      const groupDate = parseISO(group.startDate);
      return isAfter(groupDate, today) || isEqual(groupDate, today);
    });

    setGroups(upcomingGroups.slice(0, 6));
  }, [allGroups]);

  return (
    <div className="min-w-full px-4 py-12 my-12 rounded-2xl bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <h1 className="text-4xl font-bold text-center mb-10">
        Explore All Groups
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {groups.map((group) => (
          <Group key={group._id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default AllGroups;
