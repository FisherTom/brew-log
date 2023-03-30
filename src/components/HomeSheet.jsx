import React from "react";

function HomeSheet() {
  return (
    <div>
      <div className="flex flex-col max-w-6xl gap-5 p-6 m-4 bg-white shadow-2xl h-fit">
        <div>
          <div className="flex justify-between gap-5">
            <div className="flex flex-col " id="sheet-title">
              <h1 className="flex flex-wrap text-6xl font-bebas drop-shadow-[2px_2px_3px_rgba(160,160,160)]">
                Welcome To Bru-Sheets!
              </h1>
              <h3 className="text-3xl font-bebas">
                Portfolio project by Tom Fisher
              </h3>
            </div>
            <img
              alt="cheers"
              src={require("../png-icons/cheers(1).png")}
              className="w-20 h-20"
            />
          </div>
          <div className="border-black flexborder-t-2">
            <p className="p-2 mt-10">
              Bru-Sheets keeps you organized by storing all of your brewing
              recipies and brew logs in one place. Get started by selecting a
              beer recipe or jump right in and create you own using the
              template. <br />
              <br />
              This is a portfolio project by Tom fisher, you can find more info
              on this and other projects on my portfolio site -
              <a className="text-pink-600" href="https://tomfisher.dev/">
                {" "}
                tomfisher.dev{" "}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSheet;
