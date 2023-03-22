import React from "react";
import HopChart from "./HopChart";

function BrewSheet({ beer }) {
  return (
    <div className="flex flex-col gap-5 bg-white p-6 m-10 w-full h-fit border-2 border-black">
      <div className="flex items-end gap-5" id="sheet-title">
        <h1 className="text-4xl font-bebas">{beer.name}</h1>
        <h3 className="text-2xl font-bebas">{beer.abv + " % abv"}</h3>
      </div>
      <h2 className="font-bebas text-2xl">Ingredients</h2>
      <div className="flex flex-col gap-2" id="ingredients">
        <div className="flex gap-2">
          <div className="flex-grow border-2 border-black">
            <h3 className="bg-slate-300 p-3">Malts:</h3>
            <ul className="p-3">
              {beer.ingredients.malt.map((malt) => {
                return <li key={malt.name}>{malt.name}</li>;
              })}
            </ul>
          </div>
          <div className="flex-grow border-2 border-black flex flex-col ">
            <h3 className="bg-slate-300 p-3">Hops:</h3>
            <div className="flex justify-between">
              <ul className="p-3">
                {[...new Set(beer.ingredients.hops.map((hop) => hop.name))].map(
                  (name) => (
                    <li>
                      <a
                        href={`https://www.themaltmiller.co.uk/?s=${name}&search_id=1&post_type=product`}
                      >
                        {name}
                      </a>
                    </li>
                  )
                )}
              </ul>
              <div className="w-60 self-center m-5">
                <HopChart hops={beer.ingredients.hops} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 border-2 border-black">
          <h3 className="bg-slate-300 p-3">Yeast: </h3>
          <p className="p-3">{beer.ingredients.yeast}</p>
        </div>
      </div>
      <h2 className="font-bebas text-2xl">Process</h2>
      <div className="flex flex-col gap-2" id="process">
        <div className="flex gap-2">
          <div className="flex-grow border-2 border-black">
            <h3 className="bg-slate-300 p-3">Mash</h3>
            <ol className="p-3">
              {beer.method.mash_temp.map((step) => {
                return (
                  <li>{`${step.temp.value} ${step.temp.unit} for ${step.duration} mins`}</li>
                );
              })}
            </ol>
          </div>
          <div className="flex-grow border-2 border-black">
            <h3 className="bg-slate-300 p-3">boil</h3>
            <h4 className="p-3">
              Boil Volume:
              {` ${beer.boil_volume.value}${beer.boil_volume.unit}`}
            </h4>
            <ol className="p-3">
              {beer.ingredients.hops.map((hop) => {
                return (
                  <li>{`${hop.amount.value} ${hop.amount.unit} ${hop.name} - ${hop.add} - ${hop.attribute}`}</li>
                );
              })}
            </ol>
          </div>
        </div>
        <div className="flex-grow border-2 border-black">
          <h3 className="bg-slate-300 p-3">Fermentation</h3>
          <h4 className="p-3">{`${beer.method.fermentation.temp.value} ${beer.method.fermentation.temp.unit}`}</h4>
        </div>
      </div>
    </div>
  );
}

export default BrewSheet;
