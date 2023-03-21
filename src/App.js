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
    <div className="flex bg-gray-800">
      <Sidebar>
        {beerList.map((beer) => {
          return (
            <li key={beer.id} onClick={() => setSelectedBeer(beer)}>
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
