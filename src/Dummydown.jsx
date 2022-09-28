import React from "react";

function Dummydown({ updatemyCart }) {
  return (
    <div className="flex justify-between items-center space-y-3">
      <div className="flex items-center justify-center">
        <input
          placeholder="Submit Coupan"
          className="rounded-md border-x-2 border-orange-600 focus:border-blue-400 focus:outline-none"
        />{" "}
        <button className="bg-orange-300 px-1 rounded-md font-semibold text-white hover:animate-pulse">
          Add Coupan
        </button>
      </div>
      <div className="flex justify-end items-end">
        <button
          onClick={updatemyCart}
          className="bg-blue-400 px-6 py-1 rounded-md font-black hover:text-white  "
        >
          Update Cart
        </button>
      </div>
    </div>
  );
}

export default Dummydown;
