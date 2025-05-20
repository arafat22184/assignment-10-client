import { useEffect, useState } from "react";

const MyGroups = () => {
  const [groups, setGroups] = useState([]);
  const user = {
    email: "john@example.com",
  };

  useEffect(() => {
    const fetchGroups = async () => {
      // Simulate fetching only user-created groups
      const allGroups = [
        {
          id: 1,
          name: "Art Enthusiasts",
          category: "Drawing & Painting",
          members: 15,
          startDate: "2025-06-01",
          location: "Dhaka",
          creatorEmail: "john@example.com",
        },
        {
          id: 2,
          name: "Photography Pros",
          category: "Photography",
          members: 10,
          startDate: "2025-06-10",
          location: "Chittagong",
          creatorEmail: "someone@else.com",
        },
      ];
      const myGroups = allGroups.filter(
        (group) => group.creatorEmail === user.email
      );
      setGroups(myGroups);
    };

    fetchGroups();
  }, [user.email]);

  const handleDelete = (id) => {
    const remaining = groups.filter((g) => g.id !== id);
    setGroups(remaining);
  };

  const handleUpdate = (id) => {
    console.log("Update group:", id);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-primary text-center">
        My Created Groups
      </h2>

      {groups.length === 0 ? (
        <p className="text-center text-4xl text-gray-300">
          You haven’t created any groups yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead className="bg-gray-700 text-white">
              <tr>
                <th className="p-3">Group Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Members</th>
                <th className="p-3">Start Date</th>
                <th className="p-3">Location</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 text-white">
              {groups.map((group) => (
                <tr key={group.id} className="border-b border-gray-700">
                  <td className="p-3">{group.name}</td>
                  <td className="p-3">{group.category}</td>
                  <td className="p-3">{group.members}</td>
                  <td className="p-3">{group.startDate}</td>
                  <td className="p-3">{group.location}</td>
                  <td className="p-3 text-center space-x-2">
                    <button
                      onClick={() => handleUpdate(group.id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(group.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyGroups;
