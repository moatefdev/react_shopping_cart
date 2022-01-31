import React, { useEffect, useState } from "react";

import "../../css/Products/Products.css";

import ProductModal from "./ProductModal";
import Bounce from "react-reveal";
import { connect } from "react-redux";
import { fetchProducts } from "../../store/actions/product";

function Products(props) {
  const [product, setProduct] = useState("");
  const openModal = (product) => {
    setProduct(product);
  };

  const closeModal = () => {
    setProduct(false);
  };

  useEffect(() => {
    props.fetchProducts();
  }, []);

  return (
    <Bounce left cascade>
      <div className="products-wrapper">
        {props.products && props.products.length
          ? props.products.map((product) => {
              return (
                <div className="products__item" key={product.id}>
                  <a href="#" onClick={() => openModal(product)}>
                    <img src={product.imageUrl} alt={product.title} />
                  </a>
                  <div className="products__info">
                    <p>{product.title}</p>
                    <span>${product.price}</span>
                  </div>
                  <button onClick={() => props.addToCart(product)}>
                    Add To Cart
                  </button>
                </div>
              );
            })
          : "loading ..."}
        <ProductModal product={product} closeModal={closeModal} />
      </div>
    </Bounce>
  );
}

export default connect(
  (state) => {
    return {
      products: state.products.filterProducts,
    };
  },
  { fetchProducts }
)(Products);
