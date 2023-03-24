import { useState, useEffect } from "react";
import React from "react";
import { getAllBeers } from "../api";

function Sidebar({ setSelectedBeer }) {
  const [beerList, setBeerList] = useState([]);

  useEffect(() => {
    getAllBeers().then((beers) => {
      setBeerList(beers);
    });
  }, []);
  return (
    <div className="min-h-screen p-7 w-80 bg-white flex flex-col gap-20">
      <ul className=" flex-col flex ">
        {beerList.length === 0 ? (
          <p className="text-center text-gray-500">Loading beer list</p>
        ) : (
          beerList.map((beer) => {
            return (
              <li
                className=" m-1 p-2 rounded cursor-pointer font-rubic text-sm hover:bg-black hover:text-white"
                key={beer.id}
                onClick={() => setSelectedBeer(beer)}
              >
                {beer.name}
              </li>
            );
          })
        )}
      </ul>
      <div>
        <h2 className=" bg-pink-400 text-white p-5 rounded-2xl text-center font-bebas text-2xl shadow-xl">
          Create Recipie
        </h2>
      </div>
    </div>
  );
}

export default Sidebar;
