import React from "react";
import { Link } from "react-router-dom";

function Product({ thumbnail, category, title, rating, sale, price, id }) {
  return (
    <>
      <Link to={"/products/" + id}>
        <div className="max-w-xs bg-white">
          <div className="w-full aspect-square">
            <img src={thumbnail} className="object-cover w-full h-full" />
          </div>
          <div>
            <div className="text-xs text-gray-500">{category}</div>
            <div className="text-sm font-black">{title}</div>
            <div className="text-xs text-blue-400">{rating}</div>
            <div className="flex gap-1">
              <div class="text-gray-400 line-through text-xs">{sale}</div>
              <div className="font-bold text-md">₹{price}</div>
            </div>
          </div>
          <div className="mt-2 mb-2">
            <Link
              to={"/products/" + id}
              className="px-3 py-1 text-xs font-bold text-gray-800 bg-orange-500 border rounded-md hover:bg-orange-800 hover:text-white"
            >
              View Detail
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
}
export default Product;
