import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../components/home/TopBar";
import BottomNavbar from "../components/home/BottomNavbar";

const Home = () => {
  return (
    <div className="h-screen flex flex-col bg-[#e9eff5]">
      <TopBar />

      <div
        className="flex-grow mt-20 mb-16 p-3 flex flex-col items-center overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 160px)" }}
      >
        <Outlet />
      </div>

      <BottomNavbar />
    </div>
  );
};

export default Home;
