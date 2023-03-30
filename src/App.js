import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import BrewSheet from "./components/BrewSheet";
import Sidebar from "./components/Sidebar";
import CreateSheet from "./components/CreateSheet";
import HomeSheet from "./components/HomeSheet";
function App() {
  const [selectedBeer, setSelectedBeer] = useState({});

  return (
    <div className="flex bg-gray-400">
      <div className="z-10 w-0 h-screen overflow-hidden md:w-60 shrink-0">
        <Sidebar setSelectedBeer={setSelectedBeer} />
      </div>
      <div className="flex justify-center flex-grow h-screen overflow-y-auto">
        <Routes>
          <Route path={`/`} element={<HomeSheet />} />
          <Route
            path={`/recipes/:${selectedBeer._id}`}
            element={selectedBeer && <BrewSheet beer={selectedBeer} />}
          />
          <Route path="create" element={<CreateSheet />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
