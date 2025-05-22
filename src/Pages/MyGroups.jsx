import { use, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import UserGroups from "../Components/UserGroups";

const MyGroups = () => {
  const initialallGroups = useLoaderData();
  const { user } = use(AuthContext);
  const filterallGroups = initialallGroups.filter(
    (group) => group.uid === user.uid
  );
  const [allGroups, setallGroups] = useState(filterallGroups);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">My Created Groups</h2>

      {allGroups.length === 0 ? (
        <p className="text-center text-4xl text-gray-300">
          You haven’t created any groups yet.
        </p>
      ) : (
        <UserGroups
          allGroups={allGroups}
          setallGroups={setallGroups}
        ></UserGroups>
      )}
    </div>
  );
};

export default MyGroups;
