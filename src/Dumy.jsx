import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductData } from "./api";
import Dummytop from "./Dummytop";
import DumyList from "./DumyList";
import Loading from "./Loading";

function Dumy({ cart }) {
  const [cartProduct, setCartProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promises = Object.keys(cart).map(function (productId) {
      return getProductData(productId);
    });

    const badiPromises = Promise.all(promises);
    badiPromises.then(function (products) {
      setLoading(false);
      setCartProduct(products);
    });
  }, []);
  return (
    <>
      <Link to="/cart"></Link>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div className="bg-gray-200 h-full p-2 max-w-4xl mx-auto">
            <Dummytop />
            <div className="bg-white p-4 my-2 rounded-lg">
              <DumyList
                setCartProduct={setCartProduct}
                ProductTotalCount={cart}
                cartProduct={cartProduct}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Dumy;
