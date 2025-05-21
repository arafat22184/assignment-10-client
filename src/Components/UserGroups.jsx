import React, { useContext } from "react";
import UserGroup from "./UserGroup";
import { AuthContext } from "../Provider/AuthProvider";
import {
  FaUsers,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaListUl,
  FaLayerGroup,
  FaCog,
} from "react-icons/fa";

const UserGroups = ({ userGroups, setUserGroups }) => {
  const { theme } = useContext(AuthContext);

  const tableHeadStyle = `p-3 text-sm font-semibold ${
    theme === "light" ? "bg-gray-200 text-gray-800" : "bg-gray-700 text-white"
  }`;
  const tableBodyStyle =
    theme === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-white";

  return (
    <div className="overflow-x-auto">
      <table className="lg:min-w-full min-w-6xl text-left border-collapse text-sm">
        <thead>
          <tr>
            <th className={tableHeadStyle}>
              <FaListUl className="inline-block mr-1" /> Sl.
            </th>
            <th className={tableHeadStyle}>
              <FaLayerGroup className="inline-block mr-1" /> Group Name
            </th>
            <th className={tableHeadStyle}>
              <FaListUl className="inline-block mr-1" /> Category
            </th>
            <th className={tableHeadStyle}>
              <FaUsers className="inline-block mr-1" /> Members
            </th>
            <th className={tableHeadStyle}>
              <FaCalendarAlt className="inline-block mr-1" /> Start Date
            </th>
            <th className={tableHeadStyle}>
              <FaMapMarkerAlt className="inline-block mr-1" /> Location
            </th>
            <th className={`${tableHeadStyle} text-center`}>
              <FaCog className="inline-block mr-1" /> Actions
            </th>
          </tr>
        </thead>
        <tbody className={tableBodyStyle}>
          {userGroups.map((group, i) => (
            <UserGroup
              key={group._id}
              i={i}
              setUserGroups={setUserGroups}
              userGroups={userGroups}
              group={group}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserGroups;
