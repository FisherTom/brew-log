import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React, { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

function IngredientChart({ ingredients, colors }) {
  const [summedIngredients, setSummedIngredients] = useState([]);
  const [IngredientNames, setIngredientNames] = useState([]);
  const [amounts, setAmounts] = useState([]);

  useEffect(() => {
    const summedArray = ingredients.reduce((accumulator, ingredient) => {
      const existingIngredient = accumulator.find(
        (accIngredient) => accIngredient.name === ingredient.name
      );
      if (existingIngredient) {
        existingIngredient.amount.value += ingredient.amount.value;
      } else {
        accumulator.push({
          name: ingredient.name,
          amount: {
            value: ingredient.amount.value,
            unit: ingredient.amount.unit,
          },
        });
      }
      return accumulator;
    }, []);
    setSummedIngredients(summedArray);
    setIngredientNames(
      summedArray.map((ingredient) => {
        return ingredient.name;
      })
    );
    setAmounts(
      summedArray.map((ingredient) => {
        return ingredient.amount.value;
      })
    );
  }, [ingredients]);

  const data = {
    labels: [...IngredientNames],
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

  return (
    <div className="flex flex-wrap">
      <div className="w-[180px]">
        <Doughnut data={data} options={options}></Doughnut>
      </div>

      <ul className="m-3 ">
        {summedIngredients.map((ingredient, i) => {
          return (
            <li className="flex align-middle m-2 gap-2">
              <div
                className={`w-6 h-6 rounded-[50%] shrink-0`}
                style={{ backgroundColor: `${colors[i]}` }}
              ></div>
              <p>{`${ingredient.name} - ${ingredient.amount.value} ${ingredient.amount.unit}`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default IngredientChart;
