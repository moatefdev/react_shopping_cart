import { FETCH_PRODUCTS, FILTER_SIZE } from "./types";

export const fetchProducts = () => {
  return (dispatch) => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_PRODUCTS,
          data: data,
        });
      });
  };
};

export const filterBySize = (products, value) => {
  return (dispatch) => {
    let productsClone = [...products];
    let newProducts = productsClone.filter((p) => p.sizes.indexOf(value) != -1);

    dispatch({
      type: FILTER_SIZE,
      data: {
        size: value,
        products: value == "all" ? products : newProducts,
      },
    });
  };
};

export const filterBySort = (products, value) => {
  return (dispatch) => {
    let order = value;
    let productsClone = [...products];
    let newProducts = productsClone.sort(function (a, b) {
      if (order == "lowest") {
        return a.price - b.price;
      } else if (order == "highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    dispatch({
      type: FILTER_SIZE,
      data: {
        sort: value,
        products: newProducts,
      },
    });
  };
};
