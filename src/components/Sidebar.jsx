import { useState, useEffect } from "react";
import React from "react";
import { getAllBeers } from "../api";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const [beerList, setBeerList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getAllBeers().then((beers) => {
      setBeerList(beers);
    });
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen gap-20 p-4 bg-white">
      <div>
        <Link to={"/"}>
          <h2 className="px-5 py-2 mt-16 text-2xl text-center text-white bg-gray-400 rounded-lg shadow-xl md:mt-0 font-bebas">
            Home
          </h2>
        </Link>
      </div>
      <ul className="flex flex-col ">
        {beerList.length === 0 ? (
          <p className="text-center text-gray-500">Loading beer list</p>
        ) : (
          beerList.map((beer, index) => {
            return (
              <Link key={beer._id} to={`/recipes/${beer._id}`}>
                <li className="p-2 m-1 text-sm rounded cursor-pointer font-rubic hover:bg-black hover:text-white">
                  {beer.name}
                </li>
              </Link>
            );
          })
        )}
      </ul>
      <div>
        <Link to={location.pathname === "/create" ? "/recipes" : "/create"}>
          <h2 className="p-5 text-2xl text-center text-white bg-pink-400 rounded-lg shadow-xl font-bebas">
            {location.pathname === "/create" ? "Brew Sheets" : "Create Recipe"}
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
