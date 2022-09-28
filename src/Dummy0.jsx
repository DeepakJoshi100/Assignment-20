import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductData } from "./api";
import Dummytop from "./Dummytop";
import Dummy1 from "./Dummy1";
import Loading from "./Loading";
import Dummydown from "./Dummydown";
import Dummytotal from "./Dummytotal";

function Dummy0({ cart, setCart }) {
  const [cartProduct, setCartProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [localCart, setLocalCart] = useState(cart);
  useEffect(
    function () {
      setLocalCart(cart);
    },
    [cart]
  );
  useEffect(() => {
    const promises = Object.keys(cart).map(function (productId) {
      return getProductData(productId);
    });

    const badiPromises = Promise.all(promises);
    badiPromises.then(function (products) {
      setLoading(false);
      setCartProduct(products);
    });
  }, [cart]);
  function updatemyCart() {
    setCart(localCart);
  }
  return (
    <>
      <Link to="/cart"></Link>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="h-full max-w-4xl p-2 mx-auto bg-gray-200">
              <Dummytop />
              <div className="p-4 my-2 bg-white rounded-lg">
                <Dummy1
                  setCartProduct={setCartProduct}
                  ProductTotalCount={cart}
                  cartProduct={cartProduct}
                  setCart={setCart}
                  setLoading={setLoading}
                  loading={loading}
                  localCart={localCart}
                  setLocalCart={setLocalCart}
                />
              </div>
              <Dummydown updatemyCart={updatemyCart} />
              <Dummytotal />
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default Dummy0;
