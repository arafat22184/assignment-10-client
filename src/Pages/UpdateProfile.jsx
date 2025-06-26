import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const UpdateProfile = ({ setShowModal }) => {
  const { user, updateUser, setUser, theme } = use(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;

    const newData = { displayName: name, photoURL: photoUrl };
    updateUser(newData)
      .then(() => {
        toast.success("Profile Updated Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setUser({ ...user, ...newData });
      })
      .catch(() => {
        setUser(user);
        toast.error("Update failed. Please check and try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };
  return (
    <div
      className={`rounded-lg shadow-xl p-6 w-full max-w-lg mx-auto flex flex-col justify-center items-center my-12 space-y-4 py-12 ${
        theme === "light"
          ? "bg-white text-gray-900 border border-gray-200"
          : "bg-gray-800 text-white"
      }`}
    >
      <h1 className="text-4xl font-bold text-indigo-500">Update Profile</h1>
      <form onSubmit={handleUpdateProfile} className="fieldset ">
        {/* Name */}
        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          className="input w-[350px] md:w-96"
          placeholder="Name"
          required
        />

        {/* Phot Url */}
        <label className="label">Photo Url</label>
        <input
          type="text"
          name="photoUrl"
          className="input w-[350px] md:w-96"
          placeholder="Photo Url"
          required
        />

        <div className="flex gap-2 justify-center items-center">
          <button
            onClick={() => setShowModal(false)}
            className="py-2 rounded text-white font-semibold text-lg bg-red-600 hover:bg-red-500 mt-4 cursor-pointer px-3"
          >
            Cancel Update
          </button>
          <button
            type="submit"
            className="py-2 rounded text-white font-semibold text-lg bg-indigo-600 hover:bg-indigo-500 mt-4 cursor-pointer px-3"
          >
            Update Information
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
