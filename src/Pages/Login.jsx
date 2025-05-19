import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex items-center justify-center px-4 mt-6">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Login to HobbyHub
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-300">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-white"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-700 text-white"
              placeholder="Your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-6">
          <button className="w-full flex items-center justify-center gap-2 py-2 bg-gray-700 hover:bg-indigo-600 text-white font-semibold rounded-md transition duration-300 cursor-pointer">
            <FcGoogle /> Login with Google
          </button>
        </div>

        <div className="mt-4 text-center text-gray-300 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
