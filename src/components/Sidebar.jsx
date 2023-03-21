import React from "react";

function Sidebar(props) {
  return (
    <div className="min-h-screen p-7 w-80 bg-slate-500">
      <h2 className="bg-slate-100 p-3 text-center">My Brew Sheets</h2>
      <ul className="flex-col flex">{props.children}</ul>
    </div>
  );
}

export default Sidebar;
