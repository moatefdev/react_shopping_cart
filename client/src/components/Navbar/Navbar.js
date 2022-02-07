import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/Navbar/Navbar.css";
function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/orders">Orders</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
