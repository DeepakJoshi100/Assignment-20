import React from "react";
function Dummytop() {
  return (
    <>
      <div className="grid items-center justify-center max-w-4xl grid-cols-5 mx-auto space-y-1 bg-gray-200 border-2 border-gray-300 rounded-sm">
        <div></div>
        <div className="text-2xl font-black">Products</div>{" "}
        <div className="text-2xl font-black">Price</div>{" "}
        <div className="text-2xl font-black">Quantity</div>
        <div className="text-2xl font-black">Total</div>
      </div>
    </>
  );
}
export default Dummytop;
