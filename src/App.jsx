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
import SignUp from "./SignUp";
import Forgot from "./Forgot";
import { FaHamburger } from "react-icons/fa";
import Mobilemenu from "./Mobilemenu";

import { getProductData } from "./api"
import Dumy from "./Dumy";


function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleMenuOpen() {
    setMenuOpen(!isMenuOpen);
  }
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
      <div className="flex flex-col h-screen overflow-y-auto ">
        <Navbar productCount={totalCount} />
        <div className="fixed flex flex-col items-start justify-start md:hidden">
          <FaHamburger
            onClick={handleMenuOpen}
            className="text-4xl font-black text-white"
          />
          {isMenuOpen && (
            <div>
              <Mobilemenu />{" "}
            </div>
          )}
        </div>

        <div className="flex justify-between max-w-4xl gap-4 font-black">
          <div className="flex gap-4">
            <Link to="/home">Home</Link>
            <Link to="/cart">Cart</Link>
          </div>
          <div className="flex gap-5">
            <Link to="/LoginPage">Login</Link>
            <Link to="/SignUp">Signup</Link>
          </div>
        </div>
        <div className="grow">
          <Routes>
            <Route index element={<MainProductList />}></Route>
            <Route
              path="/products/:id"
              element={<NewPageDetail onAddToCart={handleAddToCart} />}
            ></Route>
            <Route path="/products/main" element={<MainProductList />}></Route>
            <Route path="/home" element={<MainProductList />}></Route>
            <Route path="/cart" element={<Dumy cart={cart} />}></Route>
            <Route path="/ContactUs" element={<Contact />}></Route>
            <Route path="/LoginPage" element={<Login />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/Forgot" element={<Forgot />}></Route>
            <Route path="*" element={<NoData />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
