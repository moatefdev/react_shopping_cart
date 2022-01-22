import React from "react";

import "../../css/Cart/Cart.css";

function Cart(props) {
  return (
    <div className="cart">
      <div className="cart__title">
        {props.cartItems.length === 0 ? (
          "Cart Empty"
        ) : (
          <p>There is {props.cartItems.length} products in cart</p>
        )}
      </div>
      <div className="cart__items">
        {props.cartItems.map((item) => {
          return (
            <div className="cart__items__item" key={item.id}>
              <img src={item.imageUrl} alt="" />
              <div className="cart__item__info">
                <div>
                  <p>Title: {item.title}</p>
                  <p>Quantity: {item.qty}</p>
                  <p>Price: ${item.price}</p>
                </div>
                <button onClick={() => props.removeFromCart(item)}>
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
