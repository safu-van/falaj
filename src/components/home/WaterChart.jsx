import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

const WaterChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        data: [10000, 20000, 50000, 40000, 30000],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
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
    },
    scales: {
      x: { type: "category" },
    },
  };

  return <Bar data={data} options={options} />;
};

export default WaterChart;
