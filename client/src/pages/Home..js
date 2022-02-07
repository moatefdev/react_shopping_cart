import React from "react";
import Cart from "../components/Cart/Cart";
import Filter from "../components/Filter/Filter";
import Products from "../components/Products/Products";
function Home() {
  return (
    <>
      <div className="wrapper">
        <Products />
        <Filter />
      </div>
      <Cart />
    </>
  );
}

export default Home;
