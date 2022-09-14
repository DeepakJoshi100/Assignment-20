import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className="max-w-4xl grid-cols-3 gap-2 mx-auto md:grid ">
      {products.map(function (item) {
        return (
          <Product
            title={item.title}
            category={item.category}
            photo={item.thumbnail}
            price={item.price}
            rating={item.rating}
            sale={item.sale}
            {...item}
          />
        );
      })}
    </div>
  );
}
export default ProductList;
