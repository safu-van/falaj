import React from "react";
import ExpenseChart from "../components/home/ExpenseChart";
import WaterChart from "../components/home/WaterChart";

const Dashboard = () => {
  return (
    <>
      <div className="w-full p-3 bg-white rounded-md shadow-md mb-5">
        <WaterChart />
      </div>
      <div className="w-full p-3 bg-white rounded-md shadow-md">
        <ExpenseChart />
      </div>
    </>
  );
};

export default Dashboard;
