import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Loading2 from "./Loading2";
function Dummy2({
  thumbnail,
  title,
  price,
  id,
  ProductTotalCount,
  setCart,
  setLoading,
  loading,
  localCart,
  setLocalCart,
}) {
  function handleRemove(event) {
    const productId = event.currentTarget.getAttribute("productid");
    console.log("product is ", productId);
    const newCart = { ...ProductTotalCount };
    console.log("before", ProductTotalCount);
    delete newCart[productId];
    setCart(newCart);
    setLoading(true);
    console.log("after", ProductTotalCount);
  }
  function handleChange(event) {
    const newValue = +event.target.value;
    const productId = event.target.getAttribute("productid");
    console.log("handlecange", newValue, productId);
    const newLocalCart = { ...localCart, [productId]: newValue };
    setLocalCart(newLocalCart);
  }
  if (loading) {
    return <Loading2 />;
  }
  return (
    <>
      <div className="grid items-center justify-center max-w-4xl grid-cols-6 mx-auto my-2 space-y-5 bg-blue-200 border-2 border-blue-300 rounded-sm">
        <div className="mx-auto text-2xl text-red-600 hover:text-red-800 hover:animate-bounce">
          <button productid={id} onClick={handleRemove}>
            <AiOutlineDelete className="font-black" />
          </button>
        </div>
        <div className="w-20 aspect-square">
          <img src={thumbnail} className="object-cover w-full h-full" />
        </div>
        <div>
          <div className="text-xs font-black text-orange-400">{title}</div>
        </div>

        <div className="flex gap-1">
          <div className="text-sm font-semibold">₹{price}</div>
        </div>

        <div>
          <input
            productid={id}
            value={localCart[id]}
            className="flex items-center justify-center w-12 border-2 border-blue-300 rounded-md focus:outline-none focus:border-blue-600"
            type="number"
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-1">
          <span className="font-bold">₹</span>
          {price * ProductTotalCount[id]}
        </div>
      </div>
    </>
  );
}
export default Dummy2;
