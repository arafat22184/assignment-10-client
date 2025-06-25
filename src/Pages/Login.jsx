import { FcGoogle } from "react-icons/fc";
import { MdEmail, MdLock, MdLogin, MdPersonAdd } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signInUser, setLocation, googleLogIn, theme } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setLocation(location.state);
    if (location.state === "/createGroup" || location.state === "/myGroups") {
      toast.error("Please Log in first", {
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
  }, [location.state, setLocation]);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        navigate(location.state ? location.state : "/");
        toast.success("Sign in successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch(() => {
        toast.error("Email or Password Invalid", {
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

  const handleGoogleLogin = () => {
    googleLogIn()
      .then(() => {
        navigate(location.state ? location.state : "/");
        toast.success("Sign in successfully with Google", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch(() => {
        toast.error(
          "Oops! Something went wrong with Google sign-in. Please try again later.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      });
  };

  // Theme based styles
  const inputBg = theme === "light" ? "bg-white" : "bg-gray-700";
  const inputBorder = theme === "light" ? "border-gray-300" : "border-gray-700";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const labelColor = theme === "light" ? "text-gray-700" : "text-gray-300";
  const buttonBg =
    theme === "light"
      ? "bg-indigo-600 hover:bg-indigo-700"
      : "bg-indigo-600 hover:bg-indigo-700";
  const googleBtnBg =
    theme === "light"
      ? "bg-gray-200 hover:bg-indigo-600 text-gray-900 hover:text-white"
      : "bg-gray-700 hover:bg-indigo-600 text-white";

  return (
    <div className="flex items-center justify-center px-4 my-8">
      <div
        className={`w-full max-w-md p-8 rounded-xl shadow-lg ${
          theme === "light" ? "border border-gray-200" : "bg-gray-900"
        }`}
      >
        <h2 className={`text-3xl font-bold mb-6 text-center ${textColor}`}>
          Login to HobbyHub
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className={`mb-1 flex items-center gap-2 ${labelColor}`}>
              <MdEmail /> Email
            </label>
            <input
              type="email"
              name="email"
              required
              className={`w-full px-4 py-2 border rounded-md ${inputBg} ${inputBorder} ${textColor}`}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className={`mb-1 flex items-center gap-2 ${labelColor}`}>
              <MdLock /> Password
            </label>
            <input
              type="password"
              name="password"
              required
              className={`w-full px-4 py-2 border rounded-md ${inputBg} ${inputBorder} ${textColor}`}
              placeholder="Your password"
              autoComplete="true"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 ${buttonBg} font-semibold rounded-md transition duration-300 text-white flex items-center justify-center gap-2 cursor-pointer`}
          >
            <MdLogin /> Login
          </button>
        </form>

        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            className={`w-full flex items-center justify-center gap-2 py-2 ${googleBtnBg} font-semibold rounded-md transition duration-300 cursor-pointer`}
          >
            <FcGoogle /> Login with Google
          </button>
        </div>

        <div className={`mt-4 text-center text-sm ${labelColor}`}>
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-400 hover:underline flex items-center justify-center gap-1"
          >
            <MdPersonAdd /> Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
