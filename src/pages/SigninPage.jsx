import React, { useState } from "react";
import TopLogo from "../components/auth/TopLogo";
import { CgProfile } from "react-icons/cg";
import { TbLock } from "react-icons/tb";
import { HiEye } from "react-icons/hi2";
import { RiErrorWarningLine, RiEyeCloseLine } from "react-icons/ri";
import { Navigate, useNavigate } from "react-router-dom";
import { getItem, setItem } from "../utils/localStorage";
import SocialAuthButtons from "../components/auth/SocialAuthButtons";

const SigninPage = () => {
  const isAuthenticated = getItem("isAuthenticated");
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError("");
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.password) {
      setError("Please fill out all fields");
    } else if (
      (formData.email === "admin@gmail.com" || formData.email === "admin") &&
      formData.password === "12345678"
    ) {
      setItem("isAuthenticated", true);
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="w-full max-w-md px-7 py-10 space-y-5 bg-white sm:shadow-lg md:shadow-none rounded-lg">
        <TopLogo />

        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`border-2 border-gray-300 rounded-xl h-12 pl-12 pr-4 w-full text-sm focus:outline-none focus:border-2 focus:border-green-600 ${
                error && "border-red-600"
              }`}
              placeholder="Username / Email"
            />
            <CgProfile className="absolute left-4 top-3 text-gray-700 text-2xl" />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`border-2 border-gray-300 rounded-xl h-12 pl-12 pr-12 w-full text-sm focus:outline-none focus:border-2 focus:border-green-600 ${
                error && "border-red-600"
              }`}
              placeholder="Password"
            />
            <TbLock className="absolute left-4 top-3 text-gray-700 text-2xl" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-gray-700 focus:outline-none"
            >
              {showPassword ? (
                <HiEye className="text-xl" />
              ) : (
                <RiEyeCloseLine className="text-xl" />
              )}
            </button>
          </div>
          {error && (
            <div className="flex items-center space-x-1 px-2">
              <RiErrorWarningLine className="text-red-600" />
              <div className="flex items-center text-[0.80rem] text-red-600">
                {error}
              </div>
            </div>
          )}

          <div className="w-full flex justify-end mt-1.5 pr-2">
            <span className="text-xs font-semibold">Forgot password?</span>
          </div>
        </div>

        <div className="flex-grow flex items-center">
          <button
            className="w-full h-12 bg-green-600 text-white rounded-xl mb-4"
            onClick={handleSubmit}
          >
            Log in
          </button>
        </div>

        <div className="flex flex-col items-center mt-4 space-y-6">
          <span className="text-xs font-semibold">Or Log in with</span>
          <SocialAuthButtons />
        </div>

        <div className="flex justify-center mt-4">
          <span className="text-xs font-semibold">
            Don't have an account?&nbsp;
            <span className="text-green-500 cursor-pointer">Sign Up</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
