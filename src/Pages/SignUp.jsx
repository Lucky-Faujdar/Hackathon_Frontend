import { motion } from "framer-motion";
import Input from "../components/Input";
import { Loader, Lock, Mail, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { toast } from "react-toastify";
import EarthVideo from "../components/Planets/EarthVideo";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const passwordValue = watch("password", "");
  const confirmPasswordValue = watch("confirmPassword", "");

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError("");
    try {
      setTimeout(() => {
        localStorage.setItem("admin", JSON.stringify(data));
        navigate("/login");
        toast.success("Signup successful! 🎉");
      }, 2000);
    } catch (err) {
      setError("Something went wrong!");
      console.log(err);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden flex justify-center items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <EarthVideo />
      </div>

      {/* Foreground */}
      <div className="relative z-10 w-100 flex top-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md  bg-zinc-900/70 border border-zinc-700 shadow-xl rounded-2xl backdrop-blur-xl"
        >
          {/* Header */}
          <div className="my-2 mx-3">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-zinc-300 tracking-wide">
              Create Account
            </h2>
          </div>

          {/* Form */}
          <form className="px-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className="pb-1">
              <Input
                icon={User}
                type="text"
                placeholder="Full Name"
                {...register("name", {
                  required: "Full Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="pb-1">
              <Input
                icon={Mail}
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="pb-1">
              <Input
                icon={Lock}
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Password Strength Meter */}
            <PasswordStrengthMeter password={passwordValue} />

            {/* Role Selection */}
            <div className="my-3">
              <label className="block mb-2 text-sm font-medium text-zinc-300">
                Select Role
              </label>
              <select
                {...register("role", { required: "Role is required" })}
                className="w-full px-3 py-1 bg-zinc-800 text-white border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose Role</option>
                <option value="Public">Public</option>
                <option value="User">User</option>
                <option value="Scientist">Scientist</option>
              </select>
              {errors.role && (
                <p className="text-sm text-red-500">{errors.role.message}</p>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <p className="mt-2 font-semibold text-red-500">{error}</p>
            )}

            {/* Submit Button */}
            <motion.button
              className="w-full rounded-sm bg-gradient-to-br from-indigo-600 to-purple-700 text-white font-bold shadow-lg focus:outline-none focus:ring-2 focus:ring-white transition duration-200 py-1.5 my-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="mx-auto animate-spin" size={24} />
              ) : (
                "Sign Up"
              )}
            </motion.button>
          </form>

          {/* Footer */}
          <div className="py-2 mt-2 bg-black/60 flex justify-center rounded-b-2xl">
            <p className="text-sm text-white text-center">
              Already have an account?{" "}
              <Link to={"/login"} className="text-red-400 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
