import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import {
  MdGroups,
  MdCategory,
  MdDescription,
  MdLocationPin,
  MdPeople,
  MdDateRange,
  MdImage,
  MdPerson,
  MdEmail,
  MdUpdate,
} from "react-icons/md";
import { toast } from "react-toastify";

const UpdateGroup = () => {
  const { user, theme } = useContext(AuthContext);
  const {
    description,
    email,
    groupName,
    hobbyCategory,
    imageUrl,
    maxMembers,
    meetingLocation,
    name,
    startDate,
    _id,
  } = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formAllValues = Object.fromEntries(formData.entries());
    const uid = user.uid;
    const updateGroup = { ...formAllValues, uid };

    fetch(
      `https://assignment-10-server-lac-sigma.vercel.app/userGroups/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateGroup),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          navigate("/myGroups");
          toast.success("Group updated successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.error("Please modify some details before submitting.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  };

  const cardBg =
    theme === "light"
      ? "bg-white text-gray-800 border border-gray-200"
      : "bg-gray-800 text-white";
  const inputBg =
    theme === "light"
      ? "bg-gray-100 border-gray-300"
      : "bg-gray-700 border-gray-600";
  const readOnlyBg =
    theme === "light"
      ? "bg-gray-200 text-gray-600 border-gray-300"
      : "bg-gray-600 text-gray-300 border-gray-500";

  const labelStyle = "flex items-center gap-2 mb-1 font-medium";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <form
        onSubmit={handleUpdate}
        className={`space-y-6 p-8 rounded-xl shadow-lg  ${cardBg}`}
      >
        <h2 className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          <MdUpdate className="text-indigo-500" /> Update Group
        </h2>

        {/* Group Name */}
        <div>
          <label className={labelStyle}>
            <MdGroups className="text-xl" /> Group Name
          </label>
          <input
            type="text"
            name="groupName"
            defaultValue={groupName}
            required
            className={`w-full px-4 py-2 rounded-md ${inputBg} focus:outline-none focus:ring-2 focus:ring-primary`}
            placeholder="Enter group name"
          />
        </div>

        {/* Hobby Category */}
        <div>
          <label className={labelStyle}>
            <MdCategory className="text-xl" /> Hobby Category
          </label>
          <select
            name="hobbyCategory"
            defaultValue={hobbyCategory}
            required
            className={`w-full px-4 py-2 rounded-md ${inputBg} focus:outline-none focus:ring-2 focus:ring-primary`}
          >
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
          <label className={labelStyle}>
            <MdDescription className="text-xl" /> Description
          </label>
          <textarea
            name="description"
            defaultValue={description}
            rows="4"
            required
            className={`w-full px-4 py-2 rounded-md ${inputBg} focus:outline-none focus:ring-2 focus:ring-primary`}
            placeholder="Write a short description about the group"
          ></textarea>
        </div>

        {/* Meeting Location */}
        <div>
          <label className={labelStyle}>
            <MdLocationPin className="text-xl" /> Meeting Location
          </label>
          <input
            name="meetingLocation"
            defaultValue={meetingLocation}
            type="text"
            required
            className={`w-full px-4 py-2 rounded-md ${inputBg} focus:outline-none focus:ring-2 focus:ring-primary`}
            placeholder="e.g. Dhaka, Bangladesh"
          />
        </div>

        {/* Max Members */}
        <div>
          <label className={labelStyle}>
            <MdPeople className="text-xl" /> Max Members
          </label>
          <input
            name="maxMembers"
            defaultValue={maxMembers}
            type="number"
            min={1}
            required
            className={`w-full px-4 py-2 rounded-md ${inputBg} focus:outline-none focus:ring-2 focus:ring-primary`}
            placeholder="e.g. 10"
          />
        </div>

        {/* Start Date */}
        <div>
          <label className={labelStyle}>
            <MdDateRange className="text-xl" /> Start Date
          </label>
          <input
            type="date"
            name="startDate"
            defaultValue={startDate}
            required
            className={`w-full px-4 py-2 rounded-md ${inputBg} focus:outline-none focus:ring-2 focus:ring-primary`}
          />
        </div>

        {/* Image URL */}
        <div>
          <label className={labelStyle}>
            <MdImage className="text-xl" /> Image URL
          </label>
          <input
            name="imageUrl"
            type="url"
            defaultValue={imageUrl}
            required
            className={`w-full px-4 py-2 rounded-md ${inputBg} focus:outline-none focus:ring-2 focus:ring-primary`}
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
              defaultValue={name}
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
              defaultValue={email}
              className={`w-full px-4 py-2 rounded-md ${readOnlyBg}`}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <MdUpdate className="text-xl" /> Update Group
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateGroup;
