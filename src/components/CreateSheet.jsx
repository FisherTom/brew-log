import React, { useState, useEffect } from "react";
import { getAllHops, getAllMalts } from "../api";
import ComboBox from "./ComboBox";

function CreateSheet() {
  const [hopList, setHopList] = useState([]);
  const [maltList, setMaltList] = useState([]);
  const [selectedHops, setSelectedHops] = useState([]);
  const [selectedMalts, setSelectedMalts] = useState([]);

  useEffect(() => {
    getAllHops().then((hops) => setHopList(hops));
    getAllMalts().then((malts) => setMaltList(malts));
  }, []);

  return (
    // <div className="flex flex-col gap-5 bg-white p-6 m-10 w-full max-w-6xl h-fit shadow-2xl">
    //   <div>
    //     <div className="flex items-end gap-5 justify-between" id="sheet-title">
    //       <input
    //         className="text-6xl font-bebas ]"
    //         placeholder="Recipe Name"
    //       ></input>
    //     </div>

    //     <div className="flex-grow border-t-2 border-black"></div>
    //   </div>
    <div className="flex flex-col gap-5 bg-white p-6 m-10 w-full max-w-6xl h-fit shadow-2xl">
      <div>
        <div className="flex items-end gap-5 justify-between" id="sheet-title">
          <input
            className="text-6xl font-bebas ]"
            placeholder="Recipe Name"
          ></input>
          <input className="text-3xl font-bebas" placeholder="ABV"></input>
        </div>
        <input className="text-3xl font-bebas" placeholder="Style"></input>
        <div className="flex-grow border-t-2 border-black">
          <input className="p-2" placeholder="description"></input>
        </div>
      </div>

      <h2 className="font-bebas text-3xl">Ingredients</h2>
      <div className="flex flex-col gap-2" id="ingredients">
        <div className="flex gap-2">
          <div className="flex-grow border-2 border-black rounded">
            <h3 className="bg-black  text-white font-rubic font-bold text-xl p-3">
              Malts
            </h3>
            <div className="p-2">
              <ol className="flex flex-col">
                {selectedMalts.map((malt) => {
                  return (
                    <li className="flex justify-between">
                      <p>{malt.name}</p>
                      <div className="flex items-center">
                        <input className="w-10 border-2 rounded"></input>
                        <p>Kg</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
              <ComboBox
                items={maltList}
                type="Malts"
                setSelectedItems={setSelectedMalts}
              />
            </div>
          </div>
          <div className="flex-grow border-2 border-black rounded  ">
            <h3 className="bg-black text-white font-rubic font-bold text-xl p-3 ">
              Hops
            </h3>
            <div className="p-2">
              <ol className="flex flex-col">
                {selectedHops.map((hop) => {
                  return (
                    <li className="flex flex-col">
                      <div className="flex justify-between flex-wrap">
                        <p className="w-[30%]">{hop.name}</p>
                        <div className="flex items-center ">
                          <input className="w-10 border-2 rounded"></input>
                          <p>g</p>
                        </div>
                        <div className="flex items-center">
                          <input className="w-10 border-2 rounded"></input>
                          <p>mins</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
              <ComboBox
                items={hopList}
                type="Hops"
                setSelectedItems={setSelectedHops}
              />
            </div>
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
