import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiSettings4Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const BottomNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl py-3.5 z-10 md:mx-auto md:max-w-[30%]">
      <div className="flex items-center justify-around">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "bg-green-600 p-2 rounded-full" : ""
          }
          end
        >
          {({ isActive }) => (
            <GoHomeFill
              className={`text-2xl ${
                isActive ? "text-white" : "text-green-600"
              }`}
            />
          )}
        </NavLink>
        <NavLink
          to="/notification"
          className={({ isActive }) =>
            isActive ? "bg-green-600 p-2 rounded-full" : ""
          }
        >
          {({ isActive }) => (
            <IoNotificationsOutline
              className={`text-2xl ${
                isActive ? "text-white" : "text-green-600"
              }`}
            />
          )}
        </NavLink>
        <NavLink
          to="/dashboard/add-expense"
          className={({ isActive }) =>
            isActive ? "bg-green-600 p-2 rounded-full" : ""
          }
        >
          {({ isActive }) => (
            <IoIosAddCircleOutline
              className={`text-2xl ${
                isActive ? "text-white" : "text-green-600"
              }`}
            />
          )}
        </NavLink>
        <RiSettings4Line className="text-2xl text-green-600" />
      </div>
    </div>
  );
};

export default BottomNavbar;
