import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import BrewSheet from "./components/BrewSheet";
import Sidebar from "./components/Sidebar";
import CreateSheet from "./components/CreateSheet";
import HomeSheet from "./components/HomeSheet";
function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex bg-gray-400">
      <div
        className={`z-10  w-0 h-screen overflow-hidden md:w-60  shrink-0 ${
          isSidebarVisible ? "w-60" : ""
        }  left-0 bg-gray-400`}
      ></div>
      <div
        className={`z-10 fixed w-0 h-screen overflow-hidden md:w-60  shrink-0 ${
          isSidebarVisible ? "w-60" : ""
        }  left-0 bg-gray-400`}
      >
        <Sidebar />
      </div>
      <div className="flex justify-center flex-grow h-screen overflow-y-auto">
        <button
          className="fixed z-20 block px-8 py-3 text-white bg-blue-500 rounded-lg md:hidden font-bebas top-4 left-4"
          onClick={toggleSidebar}
        >
          {`${isSidebarVisible ? "hide" : "show"} Menu`}
        </button>
      </div>
      <div className={`mt-16 md:mt-0 flex justify-center w-full `}>
        <Routes>
          <Route path={`/`} element={<HomeSheet />} />
          <Route path="recipes">
            <Route path={`:recipeId`} element={<BrewSheet />} />
          </Route>
          <Route path="create" element={<CreateSheet />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
