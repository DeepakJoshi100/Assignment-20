import React from "react";

function Dummytotal() {
  return (
    <div className="flex justify-center items-center space-y-3">
      <div className="flex flex-col bg-blue-300 p-4 rounded-lg gap-4 my-4 justify-start items-start px-20 py-4">
        <div className="flex mx-auto text-2xl font-black  text-white">
          Total Of All Items
        </div>
        <div className="flex text-xl font-bold">
          Subtotal = Calculating......
        </div>
        <div className="flex text-xl font-bold">
          Coupan Discount = Calculating......
        </div>
        <div className="flex text-xl font-bold">Total = Calculating......</div>
      </div>
    </div>
  );
}

export default Dummytotal;
