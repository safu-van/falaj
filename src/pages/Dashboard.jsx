import React, { useContext } from "react";
import ExpenseChart from "../components/home/ExpenseChart";
import WaterChart from "../components/home/WaterChart";
import { getItem } from "../utils/localStorage";
import { CropTypeContext } from "../context/CropTypeContext";

const Dashboard = () => {
  const { cropType } = useContext(CropTypeContext);
  const expenseData = getItem("expense");
  const expenseAmt =
    expenseData && expenseData[cropType]
      ? Object.values(expenseData[cropType])
      : [0, 0, 0];

  return (
    <>
      <div className="w-full p-3 bg-white rounded-md shadow-md mb-5">
        <WaterChart />
      </div>
      <div className="w-full p-3 bg-white rounded-md shadow-md">
        <ExpenseChart expenseAmt={expenseAmt} />
      </div>
    </>
  );
};

export default Dashboard;
