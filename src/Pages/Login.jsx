import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Lock, Loader, ArrowLeft } from "lucide-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import EarthVideo from "../components/Planets/EarthVideo";
import Input from "../components/Input";

const Login = () => {
  // Destructure formState to get the 'errors' object
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // // Set a mock admin user for successful login testing if none exists
  // useEffect(() => {
  //   if (!localStorage.getItem("admin")) {
  //     localStorage.setItem(
  //       "admin",
  //       JSON.stringify({
  //         email: "admin@gemini.com",
  //         password: "password",
  //         role: "Scientist",
  //       })
  //     );
  //     toast.info(
  //       "Mock Admin: admin@gemini.com / password / Scientist is set for testing.",
  //       { autoClose: 5000 }
  //     );
  //   }
  // }, []);

  // handle login
  const onSubmit = (data) => {
    setIsLoading(true);
    localStorage.setItem("user", JSON.stringify(data));

    // Simulate network delay
    setTimeout(() => {
      const storedAdmin = JSON.parse(localStorage.getItem("admin"));

      // Check if credentials match the mock admin user
      if (
        storedAdmin &&
        storedAdmin.email === data.email &&
        storedAdmin.password === data.password &&
        storedAdmin.role === data.role
      ) {
        // store in session storage
        sessionStorage.setItem("user", JSON.stringify(storedAdmin));
        toast.success(`Login successful as ${data.role}! 🎉`);
        navigate("/dashboard");
      } else {
        toast.error("Invalid credentials or role ❌");
      }

      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <EarthVideo />
      </div>

      {/* Foreground */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg bg-zinc-900/70 border border-zinc-700 shadow-2xl rounded-2xl backdrop-blur-xl"
        >
          <div className="p-6 sm:p-8">
            <h2 className="text-3xl font-extrabold mb-8 text-center text-white">
              Cosmic Login
            </h2>

            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email Field with Validation */}
              <Input
                icon={Mail}
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email address is required.",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/, // Basic email format validation
                    message: "Please enter a valid email address.",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mb-4 -mt-2 ml-1 font-medium">
                  {errors.email.message}
                </p>
              )}

              {/* Password Field with Validation */}
              <Input
                icon={Lock}
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters.",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-400 text-sm mb-4 -mt-2 ml-1 font-medium">
                  {errors.password.message}
                </p>
              )}

              {/* Role Selection with Validation */}
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-zinc-300">
                  Select Role
                </label>
                <select
                  {...register("role", {
                    validate: (value) =>
                      value !== "" || "Role selection is required.",
                  })}
                  className="w-full px-3 py-3 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 appearance-none"
                >
                  <option value="">-- Choose Role --</option>
                  <option value="Public">Public</option>
                  <option value="User">User</option>
                  <option value="Scientist">Scientist</option>
                </select>
                {errors.role && (
                  <p className="text-red-400 text-sm mt-2 ml-1 font-medium">
                    {errors.role.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between mb-6">
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-400 hover:text-blue-300 transition hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-4 bg-gradient-to-br from-indigo-600 to-purple-700 text-white font-bold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-white transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader className="w-6 h-6 mx-auto animate-spin" />
                ) : (
                  "Initiate Login"
                )}
              </motion.button>
            </form>
          </div>

          <div className="px-6 py-4 bg-black/60 flex justify-center rounded-b-2xl border-t border-zinc-700">
            <p className="text-sm text-white text-center">
              New to the space program?{" "}
              <Link
                to="/signup"
                className="text-red-400 hover:underline font-semibold"
              >
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
