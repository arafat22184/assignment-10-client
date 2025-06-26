import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import UserGroups from "../Components/UserGroups";

const MyGroups = () => {
  const initialGroups = useLoaderData();
  const { user } = useContext(AuthContext);

  const filteredGroups = initialGroups.filter(
    (group) => group.uid === user?.uid
  );

  const [allGroups, setAllGroups] = useState(filteredGroups);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        My Created Groups
      </h2>

      {allGroups.length === 0 ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-center text-lg sm:text-2xl text-gray-400">
            You haven’t created any groups yet.
          </p>
          <Link to={"/dashboard/createGroup"} className="btn bg-indigo-600">
            Create Group
          </Link>
        </div>
      ) : (
        <UserGroups allGroups={allGroups} setallGroups={setAllGroups} />
      )}
    </div>
  );
};

export default MyGroups;
