import React from "react";

const CreateGroup = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <form className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg text-white">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Create a New Hobby Group
        </h2>

        {/* Group Name */}
        <div>
          <label className="block mb-1 font-medium">Group Name</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter group name"
          />
        </div>

        {/* Hobby Category */}
        <div>
          <label className="block mb-1 font-medium">Hobby Category</label>
          <select
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
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
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            rows="4"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Write a short description about the group"
          ></textarea>
        </div>

        {/* Meeting Location */}
        <div>
          <label className="block mb-1 font-medium">Meeting Location</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="e.g. Dhaka, Bangladesh"
          />
        </div>

        {/* Max Members */}
        <div>
          <label className="block mb-1 font-medium">Max Members</label>
          <input
            type="number"
            min={1}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="e.g. 10"
          />
        </div>

        {/* Start Date */}
        <div>
          <label className="block mb-1 font-medium">Start Date</label>
          <input
            type="date"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="url"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Readonly User Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              readOnly
              value="John Doe" // Replace with dynamic user name
              className="w-full px-4 py-2 rounded-md bg-gray-600 text-gray-300 border border-gray-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Your Email</label>
            <input
              type="email"
              readOnly
              value="john@example.com" // Replace with dynamic user email
              className="w-full px-4 py-2 rounded-md bg-gray-600 text-gray-300 border border-gray-500"
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
