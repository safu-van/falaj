import React from "react";
import TopLogo from "../components/auth/TopLogo";
import { CgProfile } from "react-icons/cg";
import { TbLock } from "react-icons/tb";

const SigninPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <TopLogo />

      <div className="flex flex-col flex-grow px-7 mb-5">
        <div className="relative">
          <input
            type="text"
            className="border-2 border-gray-300 rounded-xl h-12 pl-12 pr-4 w-full text-sm"
            placeholder="User Name / Email"
          />
          <CgProfile className="absolute left-4 top-3 text-gray-700 text-2xl" />
        </div>

        <div className="relative mt-5">
          <input
            type="password"
            className="border-2 border-gray-300 rounded-xl h-12 pl-12 pr-4 w-full text-sm"
            placeholder="Password"
          />
          <TbLock className="absolute left-4 top-3 text-gray-700 text-2xl" />
        </div>

        <div className="w-full flex justify-end mt-1">
          <span className="text-xs font-semibold">Forgot password?</span>
        </div>

        <div className="flex-grow flex items-center">
          <button className="w-full h-12 bg-green-600 text-white rounded-xl">
            Log in
          </button>
        </div>

        <div className="h-3 flex justify-center items-center mb-2">
          <span className="text-xs font-semibold">Or Log in with</span>
        </div>

        <div className="w-full flex space-x-4 justify-center px-20 mt-2">
          <div className="p-2 border-2 border-gray-200 rounded-xl flex items-center justify-center w-10 h-10">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                d="M19.67 12.833c-.027-3.384 2.759-5.01 2.883-5.085-1.576-2.299-4.03-2.61-4.89-2.64-2.063-.21-4.022 1.217-5.065 1.217-1.04 0-2.635-1.189-4.333-1.16-2.227.033-4.304 1.334-5.452 3.378-2.334 4.053-.595 10.054 1.67 13.342 1.11 1.616 2.435 3.433 4.165 3.366 1.656-.067 2.276-1.072 4.263-1.072s2.534 1.072 4.264 1.038c1.77-.028 2.88-1.648 3.977-3.272 1.25-1.817 1.764-3.577 1.79-3.671-.04-.018-3.422-1.316-3.45-5.25z"
                fill="currentColor"
              />
              <path
                d="M15.346 3.536c.885-1.062 1.486-2.54 1.32-4.036-1.276.052-2.89.853-3.832 1.897-.841.936-1.566 2.43-1.374 3.868 1.451.112 2.98-.736 3.886-1.729z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="p-2 border-2 border-gray-200 rounded-xl flex items-center justify-center w-10 h-10">
            <svg className="w-6 h-6" viewBox="0 0 533.5 544.3">
              <path
                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                fill="#4285f4"
              />
              <path
                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                fill="#34a853"
              />
              <path
                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                fill="#fbbc04"
              />
              <path
                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                fill="#ea4335"
              />
            </svg>
          </div>
          <div className="p-2 border-2 border-gray-200 rounded-xl flex items-center justify-center w-10 h-10">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#1877F2" />
              <path
                fill="#ffffff"
                d="M15.12 8.156h-1.1c-.863 0-1.03.412-1.03 1.016v1.332h2.13l-.277 2.153h-1.853V18h-2.17v-5.344H9.3v-2.153h1.52v-1.585c0-1.5.91-2.33 2.245-2.33h1.054v2.268z"
              />
            </svg>
          </div>
        </div>

        <div className="flex justify-center mt-4 mb-4">
          <span className="text-xs font-semibold">
            Don't have an account?&nbsp;
            <span className="text-green-500">Sign Up</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
