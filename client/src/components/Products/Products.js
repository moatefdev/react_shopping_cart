import React from "react";

import "../../css/Products/Products.css";

function Products(props) {
  console.log(props);
  return (
    <div className="products">
      {props.products.map((product) => {
        return (
          <div className="products__item" key={product.id}>
            <img src={product.imageUrl} alt={product.title} />
            <div className="products__info">
              <p>{product.title}</p>
              <span>{product.price}</span>
            </div>
            <button>Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
