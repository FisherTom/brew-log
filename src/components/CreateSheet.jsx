import React from "react";

function CreateSheet() {
  return (
    <div className="flex flex-col gap-5 bg-white p-6 m-10 w-full max-w-6xl h-fit shadow-2xl">
      <div>
        <div
          className="flex items-end gap-5 justify-between"
          id="sheet-title"
        ></div>

        <div className="flex-grow border-t-2 border-black"></div>
      </div>
      <h2 className="font-bebas text-3xl">Ingredients</h2>
      <div className="flex flex-col gap-2" id="ingredients">
        <div className="flex gap-2">
          <div className="flex-grow border-2 border-black rounded">
            <h3 className="bg-black  text-white font-rubic font-bold text-xl p-3">
              Malts
            </h3>
          </div>
          <div className="flex-grow border-2 border-black rounded  ">
            <h3 className="bg-black text-white font-rubic font-bold text-xl p-3 ">
              Hops
            </h3>
          </div>
        </div>
        <div className="flex gap-2 border-2 border-black rounded">
          <h3 className="bg-black text-white font-rubic font-bold text-xl p-3">
            Yeast
          </h3>
        </div>
      </div>
      <h2 className="font-bebas text-3xl">Process</h2>
      <div className="flex flex-col gap-2" id="process">
        <div className="flex gap-2">
          <div className="flex-grow border-2 border-black rounded">
            <h3 className="bg-black text-white font-rubic font-bold text-xl p-3">
              Mash
            </h3>
            <ol className="p-3">
              <li></li>
            </ol>
          </div>
          <div className="flex-grow border-2 border-black rounded">
            <h3 className="bg-black text-white font-rubic font-bold text-xl p-3">
              boil
            </h3>
            <h4 className="p-3">Boil Volume:</h4>
            <ol className="p-3">
              <li></li>
            </ol>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-grow border-2 border-black rounded">
            <h3 className="bg-black text-white font-rubic font-bold text-xl p-3">
              Fermentation temp
            </h3>
          </div>

          <div className="flex-grow border-2 border-black rounded">
            <h3 className="bg-black text-white font-rubic font-bold text-xl p-3">
              Original Gravity
            </h3>
          </div>

          <div className="flex-grow border-2 border-black rounded">
            <h3 className="bg-black text-white font-rubic font-bold text-xl p-3">
              Final Gravity
            </h3>
          </div>
        </div>

        <div className="flex gap-2 border-2 border-black rounded">
          <h3 className="bg-black text-white font-rubic font-bold text-xl p-3">
            Notes
          </h3>
        </div>

        <div className="h-2 flex justify-between text-sm py-2 border-black border-t-2"></div>
      </div>
    </div>
  );
}

export default CreateSheet;
