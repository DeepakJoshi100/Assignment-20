import React, { useState, useEffect } from "react";
import NoData from "./NoData";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { getProductData } from "./api";
import Loading from "./Loading";

function NewPageDetail({ onAddToCart }) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      const p = getProductData(id);
      p.then(function (product) {
        setProduct(product);
        setLoading(false);
      }).catch(function () {
        setLoading(false);
      });
    },
    [id]
  );

  function handleInputInitial() {
    setCount(1);
  }

  function handleCountChange(event) {
    setCount(+event.target.value);
  }

  function handleButtonClick() {
    onAddToCart(id, count);
    setCount(1);
  }

  if (loading) {
    return <Loading />;
  }
  if (!product) {
    return <NoData />;
  }

  return (
    <>
      <div className="flex p-2">
        {" "}
        <Link
          to="/products/main"
          className="px-2 py-2 text-xl font-bold text-red-700 bg-black border rounded-md rounded-full hover:bg-blue-900 hover:text-white"
          onClick={handleInputInitial}
        >
          <HiArrowNarrowLeft />
        </Link>
      </div>

      <div className="p-4 m-4 bg-white rounded-md">
        <div className="md:flex md:gap-4 xl:gap-0">
          <div className="md:w-1/2 ">
            <img src={product.thumbnail} />
          </div>
          <div className="md:w-2/6">
            {" "}
            <h1 className="text-sm font-bold text-gray-500">
              {product.category}
            </h1>
            <h1 className="text-sm font-bold text-gray-500">{product.brand}</h1>
            <h1 className="font-black ">{product.title}</h1>
            <h1 className="text-sm font-normal ">{product.description}</h1>
            <h1 className="text-blue-500 ">{product.rating}</h1>
            <div className="flex flex-row-reverse justify-end">
              <h1 className="text-sm font-bold ">₹{product.price}</h1>
              <h1 className="mr-2 text-xs text-sm font-bold text-gray-500 line-through">
                {product.sale}
              </h1>
            </div>
            <div className="flex m-2 ml-2">
              <div>
                <input
                  value={count}
                  onChange={handleCountChange}
                  className="w-10 border-4 border-red-300 rounded-md hover:border-orange-600"
                  type="number"
                />
              </div>
              <div>
                <button
                  onClick={handleButtonClick}
                  className="px-6 py-1 ml-4 bg-orange-400 rounded-md text-bold hover:bg-orange-600"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between p-2 grow">
        <div>
          {" "}
          {id > 1 && (
            <Link to={"/products/" + (id - 1)} onClick={handleInputInitial}>
              <div className="flex items-center px-2 py-1 bg-blue-700 rounded-md hover:bg-blue-900 hover:text-white">
                <HiArrowNarrowLeft className="text-2xl" />
                <div>Previous</div>
              </div>
            </Link>
          )}
        </div>

        <div>
          {" "}
          <Link to={"/products/" + (id + 1)} onClick={handleInputInitial}>
            <div className="flex items-center px-2 py-1 bg-blue-700 rounded-md hover:bg-blue-900 hover:text-white">
              <div>Next</div>
              <HiArrowNarrowRight className="text-2xl" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NewPageDetail;
