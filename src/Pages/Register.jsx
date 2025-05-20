import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser, updateUser, setUser, location } = use(AuthContext);

  // Form Submit
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // Check for minimum length
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Check for Uppercase
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }

    // Check for lowercase
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
        if (error.message == "Firebase: Error (auth/email-already-in-use).") {
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

  return (
    <div className="flex items-center justify-center px-4 my-8">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Register for HobbyHub
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
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
              autoComplete="true"
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

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
