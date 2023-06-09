import React, { useState, useEffect } from "react";
import { getAllHops, getAllMalts, postBeer } from "../api";
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

  useEffect(() => {
    getAllHops().then((hops) => setHopList(hops));
    getAllMalts().then((malts) => setMaltList(malts));
  }, []);

  // name,abv,style,description,malts, hops,yeast,mash,fermTemp,og,fg,notes

  function handleSubmit(e) {
    e.preventDefault();
    postBeer({
      name,
      abv,
      style,
      description,
      selectedMalts,
      selectedHops,
      yeast,
      mash,
      fermTemp,
      og,
      fg,
      notes,
      batchSize,
      boilVolume,
    });
  }

  function handleAddMashStep() {
    setMash((currentMash) => {
      return [...currentMash, { mashTemp, mashTime }];
    });
    setMashTemp("");
    setMashTime("");
  }

  function handleHopChange(uuid, field, value) {
    const updatedHopsData = selectedHops.map((hop) => {
      if (hop.uuid === uuid) {
        return { ...hop, [field]: value };
      }
      return hop;
    });
    setSelectedHops(updatedHopsData);
  }

  function handleMaltChange(uuid, field, value) {
    const updatedMaltsData = selectedMalts.map((malt) => {
      if (malt.uuid === uuid) {
        return { ...malt, [field]: value };
      }
      return malt;
    });
    setSelectedMalts(updatedMaltsData);
  }

  return (
    <form className="flex flex-col w-full max-w-6xl gap-5 p-6 m-4 bg-white shadow-2xl h-fit">
      <div>
        <div
          className="flex flex-col justify-between w-full gap-2 md:flex-row"
          id="sheet-title"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full text-6xl font-bebas focus:outline-none"
            placeholder="Recipe Name"
          ></input>
          <div className="flex items-center">
            <input
              value={abv}
              onChange={(e) => setAbv(e.target.value)}
              className="w-10 text-3xl font-bebas focus:outline-none"
              placeholder="ABV"
            ></input>
            <p className="text-3xl font-bebas">%ABV</p>
          </div>
        </div>
        <input
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="text-3xl font-bebas focus:outline-none"
          placeholder="Style"
        ></input>
        <div className="flex flex-grow border-t-2 border-black">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full min-w-0 p-2 overflow-y-auto border-none outline-none resize-none h-fit"
            placeholder="Add Description"
          ></textarea>
          <button
            className="w-40 m-2 text-white bg-green-500 rounded-lg font-bebas"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit recipe
          </button>
        </div>
      </div>

      <h2 className="text-3xl font-bebas">Ingredients</h2>
      <div className="flex flex-col gap-2" id="ingredients">
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="flex-grow border-2 border-black rounded">
            <h3 className="p-3 text-xl font-bold text-white bg-black font-rubic">
              Malts
            </h3>
            <div className="p-2">
              <ol className="flex flex-col">
                {selectedMalts.map((malt) => {
                  return (
                    <li key={malt.uuid} className="flex justify-between">
                      <p>{malt.name}</p>
                      <div className="flex items-center">
                        <input
                          className="w-10 border-2 rounded"
                          onChange={(e) => {
                            handleMaltChange(
                              malt.uuid,
                              "weight",
                              e.target.value
                            );
                          }}
                        ></input>
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
          <div className="flex-grow border-2 border-black rounded ">
            <h3 className="p-3 text-xl font-bold text-white bg-black font-rubic ">
              Hops
            </h3>
            <div className="p-2">
              <ol className="flex flex-col">
                {selectedHops.map((hop, index) => {
                  return (
                    <li key={hop.uuid} className="flex flex-col">
                      <div className="flex flex-wrap justify-between">
                        <p className="w-[30%]">{hop.name}</p>
                        <div className="flex items-center ">
                          <input
                            className="w-10 border-2 rounded"
                            onChange={(e) => {
                              handleHopChange(
                                hop.uuid,
                                "weight",
                                e.target.value
                              );
                            }}
                          ></input>
                          <p>g</p>
                        </div>
                        <div className="flex items-center">
                          <input
                            className="w-10 border-2 rounded"
                            onChange={(e) => {
                              handleHopChange(hop.uuid, "time", e.target.value);
                            }}
                          ></input>
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
          <h3 className="p-3 text-xl font-bold text-white bg-black font-rubic">
            Yeast
          </h3>
          <input
            value={yeast}
            onChange={(e) => setYeast(e.target.value)}
            className="w-40 m-2 border-b-2 border-black focus:outline-none"
            placeholder="Add Yeast"
          ></input>
        </div>
      </div>
      <h2 className="text-3xl font-bebas">Process</h2>
      <div className="flex flex-col gap-2" id="process">
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="flex-grow border-2 border-black rounded">
            <h3 className="p-3 text-xl font-bold text-white bg-black font-rubic">
              Mash
            </h3>
            <div className="flex flex-col gap-3 p-3">
              <ol>
                {mash.map((item) => {
                  return (
                    <li className="flex justify-center gap-5">
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
                  className="w-5 h-5 bg-green-400 rounded-xl"
                ></div>
              </div>
            </div>
          </div>
          <div className="flex-grow border-2 border-black rounded ">
            <h3 className="p-3 text-xl font-bold text-white bg-black font-rubic">
              boil
            </h3>
            <div className="flex items-center ">
              <h4 className="p-3">Pre-boil Volume:</h4>
              <input
                value={boilVolume}
                onChange={(e) => setBoilVolume(e.target.value)}
                className="w-16 m-2 border-b-2 border-black focus:outline-none"
                placeholder="Volume"
              ></input>{" "}
              <p>Litres</p>
            </div>
            <div className="flex items-center">
              <h4 className="p-3">Batch Size:</h4>
              <input
                value={batchSize}
                onChange={(e) => setBatchSize(e.target.value)}
                className="w-16 m-2 border-b-2 border-black focus:outline-none"
                placeholder="Volume"
              ></input>
              <p>Litres</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:flex-row">
          <div className="flex-grow border-2 border-black rounded">
            <h3 className="p-3 text-xl font-bold text-white bg-black font-rubic">
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
            <h3 className="p-3 text-xl font-bold text-white bg-black font-rubic">
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
            <h3 className="p-3 text-xl font-bold text-white bg-black font-rubic">
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
          <h3 className="p-3 text-xl font-bold text-white bg-black font-rubic">
            Notes
          </h3>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full h-full min-w-0 p-2 overflow-y-auto border-none outline-none resize-none"
            placeholder="Add Notes"
          ></textarea>
        </div>

        <div className="flex justify-between h-2 py-2 text-sm border-t-2 border-black"></div>
      </div>
    </form>
  );
}

export default CreateSheet;
