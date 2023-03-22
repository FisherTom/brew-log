import { useEffect, useState } from "react";
import { getAllBeers } from "./api";
import "./App.css";
import BrewSheet from "./components/BrewSheet";
import Sidebar from "./components/Sidebar";

function App() {
  const [beerList, setBeerList] = useState([]);
  const [selectedBeer, setSelectedBeer] = useState();

  useEffect(() => {
    getAllBeers().then((beers) => {
      setBeerList(beers);
    });
  }, []);

  return (
    <div className="flex bg-gray-300">
      <Sidebar>
        {beerList.map((beer) => {
          return (
            <li
              className=" m-1 p-1 rounded text-xl cursor-pointer border-2 border-gray-400 hover:border-black font-rubic text-sm"
              key={beer.id}
              onClick={() => setSelectedBeer(beer)}
            >
              {beer.name}
            </li>
          );
        })}
      </Sidebar>
      {selectedBeer && <BrewSheet beer={selectedBeer} />}
    </div>
  );
}

export default App;
