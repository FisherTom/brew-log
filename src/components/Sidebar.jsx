import { useState, useEffect } from "react";
import React from "react";
import { getAllBeers } from "../api";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ setSelectedBeer }) {
  const [beerList, setBeerList] = useState([]);
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    getAllBeers().then((beers) => {
      setBeerList(beers);
    });
  }, []);
  return (
    <div className=" min-h-screen p-7 justify-between bg-white flex flex-col gap-20">
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
        <Link to={location.pathname === "/create" ? "/" : "/create"}>
          <h2 className=" bg-pink-400  text-white p-5 rounded-2xl text-center font-bebas text-2xl shadow-xl">
            {location.pathname === "/create" ? "Brew Sheets" : "Create Recipe"}
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
