import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import {
  IoNotificationsOutline,
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";
import { RiSettings4Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import WaterChart from "../components/home/WaterChart";
import DonutChart from "../components/home/DonutChart";

const Home = () => {
  return (
    <div className="h-screen flex flex-col bg-[#e9eff5]">
      <div className="fixed top-0 left-0 right-0 w-full bg-[#024639] flex items-center justify-between px-5 py-5 rounded-b-2xl z-10 md:mx-auto md:max-w-[30%]">
        <span className="text-gray-300 text-md">
          Hello, <span className="text-white font-semibold text-xl">Admin</span>
        </span>
        <IoIosLogOut className="text-white text-2xl cursor-pointer" />
      </div>

      <div
        className="flex-grow mt-20 mb-16 p-3 flex flex-col items-center overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 160px)" }}
      >
        <div className="w-full p-3 bg-white rounded-md shadow-md mb-5">
          <WaterChart />
        </div>
        <div className="w-full p-3 bg-white rounded-md">
          <DonutChart />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl py-3.5 z-10 md:mx-auto md:max-w-[30%]">
        <div className="flex items-center justify-around">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "bg-green-600 p-2 rounded-full" : ""
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
