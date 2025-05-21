import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router";

const UserGroup = ({ group, i }) => {
  const {
    _id,
    groupName,
    hobbyCategory,
    meetingLocation,
    maxMembers,
    startDate,
  } = group;

  return (
    <>
      <tr key={_id} className="border-b border-gray-700">
        <td className="p-3">{i + 1}.</td>
        <td className="p-3">{groupName}</td>
        <td className="p-3">{hobbyCategory}</td>
        <td className="p-3">{maxMembers}</td>
        <td className="p-3">{startDate}</td>
        <td className="p-3">{meetingLocation}</td>
        <td className="p-3 text-center space-y-2 xl:space-y-0 xl:space-x-2">
          <Link to={`/updateGroup/${_id}`}>
            <button className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded-md transition duration-300 cursor-pointer">
              <FaEdit />
              Update
            </button>
          </Link>

          <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md transition duration-300 cursor-pointer">
            <FaTrash />
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default UserGroup;
