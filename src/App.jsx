import React, { useState } from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Footer from "./Footer";
import Newpage from "./Newpage";
import MainProductList from "./MainProductList";
import NewPageDetail from "./NewPageDetail";
import { Routes, Route, Link } from "react-router-dom";
import NoData from "./NoData";
import Contact from "./Contact";
import Login from "./Login";
function App() {
  const saveDataString = localStorage.getItem("my-Cart") || "{}";
  const saveData = JSON.parse(saveDataString);
  const [cart, setCart] = useState(saveData);
  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-Cart", cartString);
  }
  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);
  return (
    <>
      <div className="flex flex-col h-screen overflow-y-auto">
        <Navbar productCount={totalCount} />

        <div className="grow">
          <Routes>
            <Route index element={<MainProductList />}></Route>
            <Route
              path="/products/:id"
              element={<NewPageDetail onAddToCart={handleAddToCart} />}
            ></Route>
            <Route path="/products/main" element={<MainProductList />}></Route>
            <Route path="/ContactUs" element={<Contact />}></Route>
            <Route path="/LoginPage" element={<Login />}></Route>
            <Route path="*" element={<NoData />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
