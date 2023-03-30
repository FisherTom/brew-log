import React from "react";
import { hopColors, maltColors } from "../hopColors";
import IngredientChart from "./IngredientChart";

function BrewSheet({ beer }) {
  return (
    <div className="flex flex-col w-full max-w-6xl gap-5 p-6 m-4 bg-white shadow-2xl h-fit">
      <div>
        <div className="flex items-end justify-between gap-5" id="sheet-title">
          <h1 className="text-6xl font-bebas drop-shadow-[2px_2px_3px_rgba(160,160,160)]">
            {beer.name}
          </h1>
          <h3 className="text-3xl font-bebas">{beer.abv + " % abv"}</h3>
        </div>
        <h3 className="text-3xl font-bebas">{beer.style}</h3>
        <div className="flex-grow border-t-2 border-black">
          <p className="p-2">{beer.description}</p>
        </div>
      </div>
      <h2 className="text-3xl font-bebas">Ingredients</h2>
      <div className="flex flex-col gap-2" id="ingredients">
        <div className="flex flex-col gap-2 md:flex-row ">
          <div className="flex-grow border-2 border-black rounded">
            <h3 className="p-3 text-xl font-bold text-white bg-black font-rubic">
              Malts
            </h3>
            <div className="flex flex-wrap items-center justify-center">
              <div className="m-10 ">
                <IngredientChart
                  ingredients={beer.ingredients.malt}
                  colors={maltColors}
                />
              </div>
            </div>
          </div>
          <div className="flex-grow border-2 border-black rounded ">
            <h3 className="p-3 text-xl font-bold text-white bg-black font-rubic ">
              Hops
            </h3>
            <div className="flex flex-wrap items-center justify-center">
              <div className="m-10 ">
                <IngredientChart
                  ingredients={beer.ingredients.hops}
                  colors={hopColors}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 border-2 border-black rounded">
          <h3 className="p-3 text-xl font-bold text-white bg-black font-rubic">
            Yeast
          </h3>
          <p className="p-3">{beer.ingredients.yeast}</p>
        </div>
      </div>
      <h2 className="text-3xl font-bebas">Process</h2>
      <div className="flex flex-col gap-2" id="process">
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="flex-grow border-2 border-black rounded">
            <h3 className="p-3 text-xl font-bold text-white bg-black font-rubic">
              Mash
            </h3>
            <ol className="p-3">
              {beer.method.mash_temp.map((step) => {
                return (
                  <li>{`${step.temp.value} ${step.temp.unit} for ${step.duration} mins`}</li>
                );
              })}
            </ol>
          </div>
          <div className="flex-grow border-2 border-black rounded">
            <h3 className="p-3 text-xl font-bold text-white bg-black font-rubic">
              boil
            </h3>
            <h4 className="p-3">
              Boil Volume:
              {` ${beer.boil_volume.value}${beer.boil_volume.unit}`}
            </h4>
            <ol className="p-3">
              {beer.ingredients.hops.map((hop) => {
                return (
                  <li>{`${hop.amount.value} ${hop.amount.unit} ${hop.name} - ${hop.add}`}</li>
                );
              })}
            </ol>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:flex-row">
          <div className="flex-grow border-2 border-black rounded">
            <h3 className="p-3 text-xl font-bold text-white bg-black font-rubic">
              Fermentation temp
            </h3>
            <h4 className="p-3">{`${beer.method.fermentation.temp.value} ${beer.method.fermentation.temp.unit}`}</h4>
          </div>

          <div className="flex-grow border-2 border-black rounded">
            <h3 className="p-3 text-xl font-bold text-white bg-black font-rubic">
              Original Gravity
            </h3>
            <h4 className="p-3">{`${beer.target_og}`}</h4>
          </div>

          <div className="flex-grow border-2 border-black rounded">
            <h3 className="p-3 text-xl font-bold text-white bg-black font-rubic">
              Final Gravity
            </h3>
            <h4 className="p-3">{`${beer.target_fg} `}</h4>
          </div>
        </div>

        {beer.notes && (
          <div className="flex gap-2 border-2 border-black rounded">
            <h3 className="p-3 text-xl font-bold text-white bg-black font-rubic">
              Notes
            </h3>
            <p className="p-3">{beer.notes}</p>
          </div>
        )}

        <div className="flex justify-between h-2 py-2 text-sm border-t-2 border-black">
          <p>{`Submitted by ${beer.created_by}`}</p>
          <p>{`${beer.date.slice(0, 10)}`}</p>
        </div>
      </div>
    </div>
  );
}

export default BrewSheet;
