import React, { useState } from "react";
function DummyMain({
  thumbnail,

  title,

  price,
  id,
  ProductTotalCount,
}) {
  return (
    <>
      <div className="grid items-center justify-center max-w-4xl grid-cols-5 mx-auto my-2 space-y-5 bg-blue-200 border-2 border-blue-300 rounded-sm">
        <div className="w-20 aspect-square">
          <img src={thumbnail} className="object-cover w-full h-full" />
        </div>
        <div>
          <div className="text-xs font-black text-orange-400">{title}</div>
        </div>

        <div className="flex gap-1">
          <div className="text-sm font-semibold">₹{price}</div>
        </div>

        <div className="flex items-center justify-center w-12 border-4 border-blue-200">
          {ProductTotalCount[id]}
        </div>
        <div className="flex gap-1">
          <span className="font-bold">₹</span>
          {price * ProductTotalCount[id]}
        </div>
      </div>
    </>
  );
}
export default DummyMain;
