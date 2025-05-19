import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex items-center justify-center px-4 my-8">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Register for HobbyHub
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-white"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              required
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-white"
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-white"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-white"
              placeholder="Your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition duration-300"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center text-gray-300 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
