import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const UserGroup = ({ group, i, setUserGroups, userGroups }) => {
  const {
    _id,
    groupName,
    hobbyCategory,
    meetingLocation,
    maxMembers,
    startDate,
  } = group;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete this group — are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/userGroups/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Group has been deleted.",
                icon: "success",
              });

              // Remove the group from the state
              const remainingGroups = userGroups.filter(
                (group) => group._id !== _id
              );
              setUserGroups(remainingGroups);
            }
          });
      }
    });
  };

  return (
    <>
      <tr key={_id} className="border-b border-gray-700">
        <td className="p-3">{i + 1}.</td>
        <td className="p-3">{groupName}</td>
        <td className="p-3">{hobbyCategory}</td>
        <td className="p-3">{maxMembers}</td>
        <td className="p-3">{startDate}</td>
        <td className="p-3">{meetingLocation}</td>
        <td className="p-3 text-center flex justify-center items-center gap-2">
          <Link to={`/updateGroup/${_id}`}>
            <button className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded-md transition duration-300 cursor-pointer">
              <FaEdit />
              Update
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md transition duration-300 cursor-pointer"
          >
            <FaTrash />
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default UserGroup;
