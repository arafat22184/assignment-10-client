import { use, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import UserGroups from "../Components/UserGroups";

const MyGroups = () => {
  const initialUserGroups = useLoaderData();
  const { user } = use(AuthContext);
  const filterUserGroups = initialUserGroups.filter(
    (group) => group.uid === user.uid
  );
  const [userGroups, setUserGroups] = useState(filterUserGroups);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">My Created Groups</h2>

      {userGroups.length === 0 ? (
        <p className="text-center text-4xl text-gray-300">
          You haven’t created any groups yet.
        </p>
      ) : (
        <UserGroups
          userGroups={userGroups}
          setUserGroups={setUserGroups}
        ></UserGroups>
      )}
    </div>
  );
};

export default MyGroups;
