import React, { useState } from "react";
import DummyMain from "./DummyMain";
function DumyList({ setCartProduct, ProductTotalCount, cartProduct }) {
  return (
    <>
      <div>
        {cartProduct.map(function (main) {
          return (
            <DummyMain
              ProductTotalCount={ProductTotalCount}
              title={main.title}
              category={main.category}
              photo={main.thumbnail}
              price={main.price}
              rating={main.rating}
              sale={main.sale}
              {...main}
            />
          );
        })}
      </div>
    </>
  );
}
export default DumyList;
