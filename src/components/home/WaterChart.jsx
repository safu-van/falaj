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
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        data: [
          3600, 3600, 4200, 4800, 6000, 6600, 7200, 7200, 6000, 5400, 4200,
          4200,
        ],
        backgroundColor: [
          "#4A90E2",
          "#A3C9F1",
          "#4A90E2",
          "#A3C9F1",
          "#4A90E2",
          "#A3C9F1",
          "#4A90E2",
          "#A3C9F1",
          "#4A90E2",
          "#A3C9F1",
          "#4A90E2",
          "#A3C9F1",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
      y: {
        beginAtZero: true,
        min: 0,
        max: 8000,
        ticks: {
          stepSize: 1000,
        },
      },
    },
  };

  return (
    <div style={{ height: "270px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default WaterChart;
