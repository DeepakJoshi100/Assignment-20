import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";

function Navbar({ productCount }) {
  return (
    <>
      <div className="bg-white">
        <div className="flex justify-between max-w-4xl mx-auto bg-white">
          <img
            src="https://media.discordapp.net/attachments/1001667010620559443/1009337374125326366/unknown.png?"
            className="w-28"
          />
          <div className="flex flex-col items-center">
            <RiShoppingCartLine className="text-4xl text-black" />
            <span className="text-white lg:text-sm font-bold bg-black rounded-full hover:bg-red-700 lg
              :px-1 -m-8 lg:ml-1 lg:border-2 border-white hover:border-black">
              {productCount}
            </span>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default Navbar;
