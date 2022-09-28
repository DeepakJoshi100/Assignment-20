import Dummy2 from "./Dummy2";

function Dummy1({
  setCartProduct,
  ProductTotalCount,
  cartProduct,
  setCart,
  setLoading,
  loading,
  localCart,
  setLocalCart,
}) {
  return (
    <>
      {cartProduct.length <= 0 ? (
        <div className="flex items-center justify-center h-screen text-4xl font-black text-blue-600 bg-blue-200">
          Please Add Something To Cart First........
        </div>
      ) : (
        <div>
          {cartProduct.map(function (main) {
            return (
              <>
                <Dummy2
                  localCart={localCart}
                  setLocalCart={setLocalCart}
                  loading={loading}
                  setCart={setCart}
                  setLoading={setLoading}
                  ProductTotalCount={ProductTotalCount}
                  setCartProduct={setCartProduct}
                  title={main.title}
                  category={main.category}
                  photo={main.thumbnail}
                  price={main.price}
                  rating={main.rating}
                  sale={main.sale}
                  {...main}
                />
              </>
            );
          })}
        </div>
      )}
    </>
  );
}
export default Dummy1;
