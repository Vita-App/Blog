// React imports
import React from "react";

function HamburgerBtn() {
  return (
    <>
      <div className="p-4 space-y-2 bg-gray-600 rounded shadow">
        <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
        <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
        <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
      </div>
    </>
  );
}

export default HamburgerBtn;
