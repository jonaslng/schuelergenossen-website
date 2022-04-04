import { useContext, useState } from "react";
import React from "react";
import { CartContext } from "./App";

export default function Cart(props) {
  const cartContent = useContext(CartContext);
  console.log(cartContent);
  return (
    <div className="cart-wrapper">
      {cartContent.length < 1 ? (
        <p className="nothing">Der Warenkorb ist leer</p>
      ) : (
        cartContent.forEach((element) => {
          return <div className="cartContent"></div>;
        })
      )}
    </div>
  );
}
