import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ expenseAmt }) => {
  const data = {
    labels: ["Water", "Electricity", "Fertilizer", "Other"],
    datasets: [
      {
        data: [2000, ...expenseAmt],
        backgroundColor: ["#4A90E2", "#F4D03F", "#58D68D", "#AAB7B8"],
        borderColor: ["#3498DB", "#F5B041", "#28B463", "#808B96"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Expenses",
        font: { size: 15 },
        padding: { top: 0, bottom: 10 },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw || 0;
            return `AED ${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default ExpenseChart;
