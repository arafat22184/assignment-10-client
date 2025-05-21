import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import {
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaImage,
} from "react-icons/fa";
import { MdCategory, MdDescription, MdEmail, MdPerson } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

const CreateGroup = () => {
  const { user, theme } = use(AuthContext);

  const handleCreateGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formAllValues = Object.fromEntries(formData.entries());
    const uid = user.uid;

    const newGroup = { ...formAllValues, uid };

    fetch("http://localhost:3000/userGroups", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newGroup),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Group Created Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        form.reset();
      });
  };

  const inputStyle = `w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 ${
    theme === "light"
      ? "bg-gray-100 border-gray-300 focus:ring-indigo-500"
      : "bg-gray-700 border-gray-600 focus:ring-indigo-400"
  }`;

  const readOnlyBg =
    theme === "light"
      ? "bg-gray-200 text-gray-600 border-gray-300"
      : "bg-gray-600 text-gray-300 border-gray-500";

  const labelStyle = "flex items-center gap-2 mb-1 font-medium";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <form
        onSubmit={handleCreateGroup}
        className={`space-y-6 p-8 rounded-xl shadow-lg transition-colors duration-300 ${
          theme === "light"
            ? "bg-white text-gray-900 border border-gray-200"
            : "bg-gray-800 text-white"
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <IoMdPerson className="text-indigo-500" /> Create a New Hobby Group
        </h2>

        {/* Group Name */}
        <div>
          <label className="mb-1 font-medium flex items-center gap-1">
            <IoMdPerson /> Group Name
          </label>
          <input
            type="text"
            name="groupName"
            required
            className={inputStyle}
            placeholder="Enter group name"
          />
        </div>

        {/* Hobby Category */}
        <div>
          <label className=" mb-1 font-medium flex items-center gap-1">
            <MdCategory /> Hobby Category
          </label>
          <select name="hobbyCategory" required className={inputStyle}>
            <option value="">Select Category</option>
            <option>Drawing & Painting</option>
            <option>Photography</option>
            <option>Video Gaming</option>
            <option>Fishing</option>
            <option>Running</option>
            <option>Cooking</option>
            <option>Reading</option>
            <option>Writing</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className=" mb-1 font-medium flex items-center gap-1">
            <MdDescription /> Description
          </label>
          <textarea
            name="description"
            rows="4"
            required
            className={inputStyle}
            placeholder="Write a short description about the group"
          ></textarea>
        </div>

        {/* Meeting Location */}
        <div>
          <label className=" mb-1 font-medium flex items-center gap-1">
            <FaMapMarkerAlt /> Meeting Location
          </label>
          <input
            name="meetingLocation"
            type="text"
            required
            className={inputStyle}
            placeholder="e.g. Dhaka, Bangladesh"
          />
        </div>

        {/* Max Members */}
        <div>
          <label className=" mb-1 font-medium flex items-center gap-1">
            <FaUsers /> Max Members
          </label>
          <input
            name="maxMembers"
            type="number"
            min={1}
            required
            className={inputStyle}
            placeholder="e.g. 10"
          />
        </div>

        {/* Start Date */}
        <div>
          <label className=" mb-1 font-medium flex items-center gap-1">
            <FaCalendarAlt /> Start Date
          </label>
          <input type="date" name="startDate" required className={inputStyle} />
        </div>

        {/* Image URL */}
        <div>
          <label className=" mb-1 font-medium flex items-center gap-1">
            <FaImage /> Image URL
          </label>
          <input
            name="imageUrl"
            type="url"
            required
            className={inputStyle}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Readonly User Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelStyle}>
              <MdPerson className="text-xl" /> Your Name
            </label>
            <input
              name="name"
              type="text"
              readOnly
              defaultValue={user.displayName}
              className={`w-full px-4 py-2 rounded-md ${readOnlyBg}`}
            />
          </div>
          <div>
            <label className={labelStyle}>
              <MdEmail className="text-xl" /> Your Email
            </label>
            <input
              name="email"
              type="email"
              readOnly
              defaultValue={user.email}
              className={`w-full px-4 py-2 rounded-md ${readOnlyBg}`}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold transition"
          >
            Create Group
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGroup;
