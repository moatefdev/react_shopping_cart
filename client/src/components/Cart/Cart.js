import React, { useState } from "react";

import "../../css/Cart/Cart.css";
import "../../css/CheckoutForm/CheckoutForm.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Bounce } from "react-reveal";
import { connect } from "react-redux";
import { removeCart } from "./../../store/actions/cart";

function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="cart">
      <div className="cart__title">
        {props.cartItems.length === 0 ? (
          "Cart Empty"
        ) : (
          <p>There is {props.cartItems.length} products in cart</p>
        )}
      </div>
      <Bounce left cascade>
        <div className="cart__items">
          {props.cartItems.map((item) => {
            return (
              <div className="cart__items__item" key={item.id}>
                <img src={item.imageUrl} alt="" />
                <div className="cart__item__info">
                  <div>
                    <p>Title: {item.title}</p>
                    <p>Quantity: {item.qty}</p>
                    <p>Price: ${item.price * item.qty}</p>
                  </div>
                  <button onClick={() => props.removeCart(item)}>Remove</button>
                </div>
              </div>
            );
          })}
        </div>
      </Bounce>
      {props.cartItems.length !== 0 && (
        <div className="cart__footer">
          <span className="total">
            Total Price: $
            {props.cartItems.reduce((acc, p) => {
              return acc + p.price * p.qty;
            }, 0)}
          </span>
          <button onClick={() => setShowForm(true)}>Select Product</button>
        </div>
      )}
      {/* Checkout Form */}
      <CheckoutForm
        showForm={showForm}
        value={value}
        setShowForm={setShowForm}
        handleChange={handleChange}
      />
    </div>
  );
}

export default connect(
  (state) => {
    return { cartItems: state.cart.cartItems };
  },
  { removeCart }
)(Cart);
