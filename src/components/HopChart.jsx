import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

function HopChart() {
  const data = {
    labels: ["yes", "no"],
    datasets: [
      {
        label: "poll",
        data: [3, 6],
        backgroundColor: ["black", "red"],
        borderColor: ["black", "red"],
      },
    ],
  };
  const options = {};
  return <Doughnut data={data} options={options}></Doughnut>;
}

export default HopChart;
