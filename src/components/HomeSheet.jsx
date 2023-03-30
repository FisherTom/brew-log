import React from "react";

function HomeSheet() {
  return (
    <div>
      <div className="flex flex-col w-[90%] max-w-6xl gap-5 p-6 m-4 bg-white shadow-2xl h-fit">
        <div>
          <div className="flex items-end justify-between " id="sheet-title">
            <h1 className="flex flex-wrap text-6xl font-bebas drop-shadow-[2px_2px_3px_rgba(160,160,160)]">
              Welcome To Bru-Sheets!
            </h1>
            <h3 className="text-3xl font-bebas">
              Portfolio project by Tom Fisher
            </h3>
          </div>
          <div className="flex justify-between">
            <img
              alt="barley"
              src={require("../png-icons/barley.png")}
              className="w-20 h-20 m-10"
            />
            <img
              alt="hop"
              src={require("../png-icons/hop.png")}
              className="w-20 h-20 m-10"
            />
            <img
              alt="brew"
              src={require("../png-icons/production.png")}
              className="w-20 h-20 m-10"
            />
            <img
              alt="beer"
              src={require("../png-icons/beer1.png")}
              className="w-20 h-20 m-10"
            />
            <img
              alt="cheers"
              src={require("../png-icons/cheers(1).png")}
              className="w-20 h-20 m-10"
            />
          </div>
          <div className="border-black flexborder-t-2">
            <p className="p-2">
              Bru-Sheets keeps you organized by storing all of your brewing
              recipies and brew logs in one place. Get started by selecting a
              beer recipe or jump right in and create you own using the
              template.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSheet;
