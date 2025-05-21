import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { HiUser, HiMail, HiLockClosed, HiPhotograph } from "react-icons/hi";

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
        navigate(`${location ? location : "/"}`);
        const user = result.user;
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
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

  const inputBg = theme === "light" ? "bg-white" : "bg-gray-700";
  const inputBorder = theme === "light" ? "border-gray-300" : "border-gray-700";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const labelColor = theme === "light" ? "text-gray-700" : "text-gray-300";
  const boxBg =
    theme === "light" ? "bg-white border border-gray-200" : "bg-gray-900";
  const buttonBg =
    theme === "light"
      ? "bg-indigo-600 hover:bg-indigo-700"
      : "bg-indigo-600 hover:bg-indigo-700";

  return (
    <div className="flex items-center justify-center px-4 my-8">
      <div className={`w-full max-w-md p-8 rounded-xl shadow-lg ${boxBg}`}>
        <h2 className={`text-3xl font-bold mb-6 text-center ${textColor}`}>
          Register for HobbyHub
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className={`flex items-center mb-1 space-x-2 ${labelColor}`}>
              <HiUser className="text-xl" />
              <span>Name</span>
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
            <label className={`flex items-center mb-1 space-x-2 ${labelColor}`}>
              <HiPhotograph className="text-xl" />
              <span>Photo URL</span>
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
            <label className={`flex items-center mb-1 space-x-2 ${labelColor}`}>
              <HiMail className="text-xl" />
              <span>Email</span>
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
            <label className={`flex items-center mb-1 space-x-2 ${labelColor}`}>
              <HiLockClosed className="text-xl" />
              <span>Password</span>
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
            className={`w-full py-2 font-semibold rounded-md transition duration-300 text-white ${buttonBg} cursor-pointer`}
          >
            Register
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
