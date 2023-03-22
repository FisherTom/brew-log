import { useState } from "react";

import BrewSheet from "./components/BrewSheet";
import Sidebar from "./components/Sidebar";

function App() {
  const [selectedBeer, setSelectedBeer] = useState();

  return (
    <div className="flex bg-gray-200">
      <Sidebar setSelectedBeer={setSelectedBeer} />
      <div className=" w-full flex justify-center">
        {selectedBeer && <BrewSheet beer={selectedBeer} />}
      </div>
    </div>
  );
}

export default App;
