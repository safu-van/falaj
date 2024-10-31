import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import {
  IoNotificationsOutline,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";
import { RiSettings4Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-between bg-[#e9eff5]">
      <div className="bg-[#024639] w-full flex items-center px-5 py-3.5 rounded-b-2xl justify-between">
        <span className="text-gray-300 text-md">
          Hello, <span className="text-white font-semibold text-xl">Admin</span>
        </span>
        <IoIosLogOut className="text-white text-2xl cursor-pointer" />
      </div>

      <div className="w-full fixed bottom-0 right-0 left-0 bg-white rounded-t-3xl py-3.5 md:mx-auto md:max-w-[30%]">
        <div className="flex items-center justify-around">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive && "bg-green-600 p-2 rounded-full"
            }
          >
            {({ isActive }) => (
              <GoHomeFill
                className={`text-2xl ${
                  isActive ? "text-white" : "text-green-600"
                }`}
              />
            )}
          </NavLink>
          <IoNotificationsOutline className="text-2xl text-green-600" />
          <IoChatbubbleEllipsesOutline className="transform scale-x-[-1] text-2xl text-green-600" />
          <RiSettings4Line className="text-2xl text-green-600" />
        </div>
      </div>
    </div>
  );
};

export default Home;
