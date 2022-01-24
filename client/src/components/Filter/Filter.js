import React from "react";

import "../../css/Filter/Filter.css";
import { Flip } from "react-reveal";

function Filter(props) {
  const sizes = [];
  // Get product sizes array and add them in a single unique array
  const GetSizesAndFlatArray = (products) => {
    let productsSizes = [];
    products.map((product) => {
      productsSizes.push(product.sizes);
    });
    const singleArray = productsSizes.flat();
    sizes.push(...[...new Set(singleArray)]);
    // console.log(sizes);
  };
  GetSizesAndFlatArray(props.products);

  return (
    <Flip left>
      <div className="filter-wrapper">
        <h2 className="filter__title">Filter</h2>
        <div className="num-of-products">
          Number of products: {props.productsNumber}
        </div>
        <div className="filter__size">
          <p>Filter</p>
          <select
            className="filter__select"
            onChange={props.handleFilterBySize}
            value={props.size}
          >
            <option value="all">All</option>
            {sizes.map((size, index) => {
              return (
                <option key={index} value={size}>
                  {size}
                </option>
              );
            })}
          </select>
        </div>
        <div className="filter__size">
          <p>Order</p>
          <select
            className="filter__select"
            value={props.sort}
            onChange={props.handleFilterByOrder}
          >
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
      </div>
    </Flip>
  );
}

export default Filter;
