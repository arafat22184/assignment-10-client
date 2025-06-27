import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { HiUser, HiMail, HiLockClosed, HiPhotograph } from "react-icons/hi";
import { MdPersonAdd } from "react-icons/md";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser, updateUser, setUser, location, theme } =
    useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }

    setError("");

    createUser(email, password)
      .then((result) => {
        navigate(location ? location : "/");
        const user = result.user;
        updateUser({ displayName: name, photoURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL });
            toast.success("Account created successfully! Welcome aboard 🎉", {
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
          .catch(() => setUser(user));
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setError(
            "This email is already registered. Please log in or use a different email."
          );
        }
        toast.error(
          "Registration failed. Please verify your information and try again!",
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
  const contentBox =
    theme === "light" ? "border-slate-300" : "border-slate-500";
  const boxBg =
    theme === "light" ? "bg-gray-50 text-gray-800" : "bg-gray-800 text-white";
  const inputBg = theme === "light" ? "bg-white" : "bg-gray-700";
  const inputBorder = theme === "light" ? "border-gray-300" : "border-gray-700";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const labelColor = theme === "light" ? "text-gray-700" : "text-gray-300";
  const buttonBg = "bg-indigo-600 hover:bg-indigo-700";

  return (
    <div
      className={`flex items-stretch justify-center mx-4 md:mx-auto my-12 lg:max-w-4xl max-w-xl border ${contentBox}`}
    >
      <div className="flex-1 hidden lg:block">
        <img
          className="h-full w-full object-cover"
          src="https://i.ibb.co/LXgqt0DY/register.jpg"
          alt="Register"
        />
      </div>

      <div className={`w-full p-8 shadow-lg flex-1 ${boxBg}`}>
        <h2 className={`text-3xl font-bold mb-6 text-center ${textColor}`}>
          Register for HobbyHub
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className={`flex items-center gap-2 mb-1 ${labelColor}`}>
              <HiUser className="text-xl" /> Name
            </label>
            <input
              type="text"
              name="name"
              required
              className={`w-full px-4 py-2 border rounded-md ${inputBg} ${inputBorder} ${textColor}`}
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className={`flex items-center gap-2 mb-1 ${labelColor}`}>
              <HiPhotograph className="text-xl" /> Photo URL
            </label>
            <input
              type="url"
              name="photoURL"
              required
              className={`w-full px-4 py-2 border rounded-md ${inputBg} ${inputBorder} ${textColor}`}
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          <div>
            <label className={`flex items-center gap-2 mb-1 ${labelColor}`}>
              <HiMail className="text-xl" /> Email
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
            <label className={`flex items-center gap-2 mb-1 ${labelColor}`}>
              <HiLockClosed className="text-xl" /> Password
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

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className={`w-full py-2 ${buttonBg} font-semibold rounded-md transition duration-300 text-white flex items-center justify-center gap-2 cursor-pointer`}
          >
            <MdPersonAdd /> Register
          </button>
        </form>

        <div className={`mt-4 text-center text-sm ${labelColor}`}>
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
