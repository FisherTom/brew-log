import { useEffect, useState } from "react";
import { getAllBeers } from "./api";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  const [beerList, setBeerList] = useState([]);

  useEffect(() => {
    getAllBeers().then((beers) => {
      setBeerList(beers);
    });
  }, []);

  return (
    <div className="flex">
      <Sidebar />
    </div>
  );
}

export default App;
