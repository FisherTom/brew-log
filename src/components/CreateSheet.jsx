import React, { useState, useEffect } from "react";
import { getAllHops, getAllMalts } from "../api";
import ComboBox from "./ComboBox";

function CreateSheet() {
  const [hopList, setHopList] = useState([]);
  const [maltList, setMaltList] = useState([]);
  const [selectedHops, setSelectedHops] = useState([]);
  const [selectedMalts, setSelectedMalts] = useState([]);
  const [name, setName] = useState();
  const [abv, setAbv] = useState();
  const [style, setStyle] = useState();
  const [description, setDescription] = useState();
  const [yeast, setYeast] = useState();
  const [mash, setMash] = useState([]);
  const [boilVolume, setBoilVolume] = useState();
  const [batchSize, setBatchSize] = useState();
  const [fermTemp, setFermTemp] = useState();
  const [og, setOg] = useState("1");
  const [fg, setFg] = useState("1");
  const [notes, setNotes] = useState();
  const [mashTemp, setMashTemp] = useState();
  const [mashTime, setMashTime] = useState();

  // name,abv,style,description,malts, hops,yeast,mash,fermTemp,og,fg,notes

  useEffect(() => {
    getAllHops().then((hops) => setHopList(hops));
    getAllMalts().then((malts) => setMaltList(malts));
  }, []);

  function handleAddMashStep() {
    setMash((currentMash) => {
      return [...currentMash, { mashTemp, mashTime }];
    });
    setMashTemp("");
    setMashTime("");
  }
  return (
    <form className="flex flex-col gap-5 bg-white p-6 m-10 w-full max-w-6xl h-fit shadow-2xl">
      <div>
        <div className="flex items-end gap-5 justify-between" id="sheet-title">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-6xl font-bebas ]"
            placeholder="Recipe Name"
          ></input>
          <input
            value={abv}
            onChange={(e) => setAbv(e.target.value)}
            className="text-3xl font-bebas"
            placeholder="ABV"
          ></input>
        </div>
        <input
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="text-3xl font-bebas"
          placeholder="Style"
        ></input>
        <div className="flex-grow border-t-2 border-black flex">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 min-w-0 w-full h-full overflow-y-auto resize-none border-none outline-none"
            placeholder="Add Description"
          ></textarea>
          <button className="w-40 bg-green-500 m-2 rounded-lg">
            Submit recipe
          </button>
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
                    <li key={malt.uuid} className="flex justify-between">
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
                    <li key={hop.uuid} className="flex flex-col">
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
          <input
            value={yeast}
            onChange={(e) => setYeast(e.target.value)}
            className="m-2 border-b-2 border-black focus:outline-none"
            placeholder="Add Yeast"
          ></input>
        </div>
      </div>
      <h2 className="font-bebas text-3xl">Process</h2>
      <div className="flex flex-col gap-2" id="process">
        <div className="flex gap-2">
          <div className="flex-grow border-2 border-black rounded">
            <h3 className="bg-black text-white font-rubic font-bold text-xl p-3">
              Mash
            </h3>
            <div className="p-3 flex flex-col gap-3">
              <ol>
                {mash.map((item) => {
                  return (
                    <li className="flex gap-5 justify-center">
                      <p>{item.mashTemp + " deg C"}</p>
                      <p>{item.mashTime + " Mins"}</p>
                    </li>
                  );
                })}
              </ol>
              <div className="flex justify-center gap-5 ">
                <div className="flex justify-center">
                  <input
                    value={mashTemp}
                    onChange={(e) => setMashTemp(e.target.value)}
                    className="w-12 border-b-2 border-black focus:outline-none"
                    placeholder="Temp"
                  ></input>
                  <p>deg C</p>
                </div>
                <div className="flex justify-center">
                  <input
                    value={mashTime}
                    onChange={(e) => setMashTime(e.target.value)}
                    className="w-12 border-b-2 border-black focus:outline-none"
                    placeholder="Time"
                  ></input>
                  <p>mins</p>
                </div>
                <div
                  onClick={() => handleAddMashStep()}
                  className="w-5 h-5 rounded-xl bg-green-400"
                ></div>
              </div>
            </div>
          </div>
          <div className="flex-grow border-2 border-black rounded ">
            <h3 className="bg-black text-white font-rubic font-bold text-xl p-3">
              boil
            </h3>
            <div className="flex items-center ">
              <h4 className="p-3">Pre-boil Volume:</h4>
              <input
                value={boilVolume}
                onChange={(e) => setBoilVolume(e.target.value)}
                className="w-[20%] m-2 border-b-2 border-black focus:outline-none"
                placeholder="Volume"
              ></input>{" "}
              <p>Litres</p>
            </div>
            <div className="flex items-center">
              <h4 className="p-3">Batch Size:</h4>
              <input
                value={batchSize}
                onChange={(e) => setBatchSize(e.target.value)}
                className="w-[20%] m-2 border-b-2 border-black focus:outline-none"
                placeholder="Volume"
              ></input>
              <p>Litres</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-grow border-2 border-black rounded">
            <h3 className="bg-black text-white font-rubic font-bold text-xl p-3">
              Fermentation temp
            </h3>
            <input
              value={fermTemp}
              onChange={(e) => setFermTemp(e.target.value)}
              className="m-2 border-b-2 border-black focus:outline-none"
              placeholder="Fermentation Temp"
            ></input>
          </div>

          <div className="flex-grow border-2 border-black rounded">
            <h3 className="bg-black text-white font-rubic font-bold text-xl p-3">
              Original Gravity
            </h3>
            <div className="flex flex-col items-center">
              <input
                onChange={(e) => {
                  setOg(e.target.value);
                }}
                value={og}
                type="range"
                min="1"
                max="1.15"
                step="0.001"
                className="w-[90%] p-2"
              ></input>
              <p>{og}</p>
            </div>
          </div>

          <div className="flex-grow border-2 border-black rounded">
            <h3 className="bg-black text-white font-rubic font-bold text-xl p-3">
              Final Gravity
            </h3>
            <div className="flex flex-col items-center">
              <input
                onChange={(e) => {
                  setFg(e.target.value);
                }}
                value={fg}
                type="range"
                min="1"
                max="1.15"
                step="0.001"
                className="w-[90%] p-2"
              ></input>
              <p>{fg}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 border-2 border-black rounded">
          <h3 className="bg-black text-white font-rubic font-bold text-xl p-3">
            Notes
          </h3>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="p-2 min-w-0 w-full h-full overflow-y-auto resize-none border-none outline-none"
            placeholder="Add Notes"
          ></textarea>
        </div>

        <div className="h-2 flex justify-between text-sm py-2 border-black border-t-2"></div>
      </div>
    </form>
  );
}

export default CreateSheet;
