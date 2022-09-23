import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductData } from "./api";
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
          <DumyList
            setCartProduct={setCartProduct}
            ProductTotalCount={cart}
            cartProduct={cartProduct}
          />
        )}
      </div>
    </>
  );
}
export default Dumy;
