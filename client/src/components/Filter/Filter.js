import React from "react";

import "../../css/Filter/Filter.css";
import { Flip } from "react-reveal";
import { connect } from "react-redux";
import { filterBySize, filterBySort } from "./../../store/actions/product";

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
  console.log(props.products);

  return (
    <>
      {props.products && GetSizesAndFlatArray(props.products)}
      <Flip left>
        {props.filterProducts && (
          <div className="filter-wrapper">
            <h2 className="filter__title">Filter</h2>
            <div className="num-of-products">
              Number of products: {props.filterProducts.length}
            </div>
            <div className="filter__size">
              <p>Filter</p>
              <select
                className="filter__select"
                onChange={(e) =>
                  props.filterBySize(props.products, e.target.value)
                }
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
                onChange={(e) =>
                  props.filterBySort(props.filterProducts, e.target.value)
                }
              >
                <option value="latest">Latest</option>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
              </select>
            </div>
          </div>
        )}
      </Flip>
    </>
  );
}

export default connect(
  (state) => {
    return {
      sort: state.products.sort,
      size: state.products.size,
      products: state.products.products,
      filterProducts: state.products.filterProducts,
    };
  },
  { filterBySize, filterBySort }
)(Filter);
