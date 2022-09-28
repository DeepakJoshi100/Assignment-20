import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductData } from "./api";
import Dummytop from "./Dummytop";
import Dummy1 from "./Dummy1";
import Loading from "./Loading";

function Dummy0({ cart }) {
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
          <div className="h-full max-w-4xl p-2 mx-auto bg-gray-200">
            <Dummytop />
            <div className="p-4 my-2 bg-white rounded-lg">
              <Dummy1
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
export default Dummy0;
