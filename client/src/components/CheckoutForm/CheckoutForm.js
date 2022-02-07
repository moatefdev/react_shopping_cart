import React from "react";
import "./../../css/CheckoutForm/CheckoutForm.css";
import Input from "../Input/Input";
import Zoom from "react-reveal/Zoom";
import { words } from "../../words";
function Checkout(props) {
  return (
    <>
      {props.showForm && (
        <div className="checkout-form">
          <span className="close-icon" onClick={() => props.setShowForm(false)}>
            &times;
          </span>
          <Zoom left>
            <form onSubmit={props.submitOrder}>
              <Input
                label={words.name}
                type="text"
                name="name"
                onChange={props.handleChange}
              />
              <Input
                label={words.email}
                type="email"
                onChange={props.handleChange}
                name="email"
              />

              <div>
                <button type="submit"> {words.checkout} </button>
              </div>
            </form>
          </Zoom>
        </div>
      )}
    </>
  );
}

export default Checkout;
