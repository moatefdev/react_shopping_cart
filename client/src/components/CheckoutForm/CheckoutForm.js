import React from "react";
import Input from "../Input/Input";
import { words } from "../../words";

function CheckoutForm(props) {
  const submitOrder = (e) => {
    e.preventDefault();
    const order = {
      name: props.value.name,
      email: props.value.email,
    };
    console.log(order);
  };

  return (
    <>
      {props.showForm && (
        <div className="checkout">
          <span className="close-icon" onClick={() => props.setShowForm(false)}>
            &times;
          </span>
          <form onSubmit={submitOrder}>
            <Input
              label={words.name}
              type="text"
              name="name"
              onChange={props.handleChange}
            />
            <Input
              label="Email"
              type="email"
              onChange={props.handleChange}
              name="email"
            />
            <div>
              <button type="submit">Checkout</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default CheckoutForm;