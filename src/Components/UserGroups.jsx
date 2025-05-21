import React from "react";
import UserGroup from "./UserGroup";

const UserGroups = ({ userGroups, setUserGroups }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse text-sm">
        <thead className="bg-gray-700 text-white">
          <tr>
            <th className="p-3">Sl.</th>
            <th className="p-3">Group Name</th>
            <th className="p-3">Category</th>
            <th className="p-3">Members</th>
            <th className="p-3">Start Date</th>
            <th className="p-3">Location</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 text-white">
          {userGroups.map((group, i) => (
            <UserGroup
              key={group._id}
              i={i}
              setUserGroups={setUserGroups}
              userGroups={userGroups}
              group={group}
            ></UserGroup>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserGroups;
