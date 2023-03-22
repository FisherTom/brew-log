import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React, { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

function IngredientChart({ ingredients, colors }) {
  const [hopNames, setHopNames] = useState([]);
  const [amounts, setAmounts] = useState([]);

  useEffect(() => {
    const summedArray = ingredients.reduce((accumulator, hop) => {
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
  }, [ingredients]);

  const data = {
    labels: [...hopNames],
    datasets: [
      {
        label: "Grams",
        data: [...amounts],
        backgroundColor: colors,
        borderColor: ["white"],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return (
              context.label +
              " " +
              context.parsed +
              " " +
              ingredients[0].amount.unit
            );
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options}></Doughnut>;
}

export default IngredientChart;
