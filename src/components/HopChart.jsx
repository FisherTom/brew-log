import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React, { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

function HopChart({ hops }) {
  const [hopNames, setHopNames] = useState([]);
  const [amounts, setAmounts] = useState([]);

  useEffect(() => {
    const summedArray = hops.reduce((accumulator, hop) => {
      const existingHop = accumulator.find(
        (accHop) => accHop.name === hop.name
      );

      if (existingHop) {
        existingHop.amount.value += hop.amount.value;
      } else {
        accumulator.push({
          name: hop.name,
          amount: {
            value: hop.amount.value,
            unit: hop.amount.unit,
          },
        });
      }
      return accumulator;
    }, []);
    setHopNames(
      summedArray.map((hop) => {
        return hop.name;
      })
    );
    setAmounts(
      summedArray.map((hop) => {
        return hop.amount.value;
      })
    );
  }, [hops]);

  const data = {
    labels: [...hopNames],
    datasets: [
      {
        label: "Grams",
        data: [...amounts],
        backgroundColor: [
          "#081C15",
          "#1B4332",
          "#2D6A4F",
          "#40916C",
          "#52B788",
          "#74C69D",
          "#95D5B2",
          "#B7E4C7",
          "#D8F3DC",
        ],
        borderColor: [
          "#081C15",
          "#1B4332",
          "#2D6A4F",
          "#40916C",
          "#52B788",
          "#74C69D",
          "#95D5B2",
          "#B7E4C7",
          "#D8F3DC",
        ],
      },
    ],
  };
  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            return context.label + " " + context.parsed + "g";
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options}></Doughnut>;
}

export default HopChart;
