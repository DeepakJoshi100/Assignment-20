import React, { useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Navbar({ productCount }) {
  return (
    <>
      <div className="bg-gray-500">
        <div className="flex justify-between max-w-4xl mx-auto bg-gray-500 ">
          <img
            src="https://media.discordapp.net/attachments/1001667010620559443/1009337374125326366/unknown.png?"
            className="w-28"
          />
          <Link to="/cart">
            <div className="flex flex-col items-center">
              <RiShoppingCartLine className="text-4xl text-black" />
              <span className="-m-8 font-bold text-white bg-black border-white rounded-full lg:text-sm hover:bg-red-700 lg :px-1 lg:ml-1 lg:border-2 hover:border-black">
                {productCount}
              </span>
            </div>
          </Link>
        </div>
      </div>{" "}
    </>
  );
}

export default Navbar;
