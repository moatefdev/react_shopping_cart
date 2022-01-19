import React from "react";

import "../../css/Filter/Filter.css";

function Filter() {
  return (
    <div className="filter__wrapper">
      <h2 className="filter__title">Filter</h2>
      <div className="num-of-products">Number of products</div>
      <div className="filter__size">
        <p>Filter</p>
        <select className="filter__select">
          <option value="all">All</option>
          <option value="xs">XS</option>
        </select>
      </div>
      <div className="filter__size">
        <p>Order</p>
        <select className="filter__select">
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
