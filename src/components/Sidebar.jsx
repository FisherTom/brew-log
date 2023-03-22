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
    <div className="min-h-screen p-7 w-80 bg-white">
      <ul className="flex-col flex">
        {" "}
        {beerList.map((beer) => {
          return (
            <li
              className=" m-1 p-2 rounded cursor-pointer font-rubic text-sm hover:bg-black hover:text-white"
              key={beer.id}
              onClick={() => setSelectedBeer(beer)}
            >
              {beer.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
