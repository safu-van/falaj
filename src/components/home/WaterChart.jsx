import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const WaterChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        data: [10000, 20000, 50000, 40000, 30000],
        backgroundColor: "#4A90E2",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Water Consumption",
        font: {
          size: 15,
        },
        padding: {
          top: 0,
          bottom: 10,
        },
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
    scales: {
      x: { type: "category" },
    },
  };

  return <Bar data={data} options={options} />;
};

export default WaterChart;
