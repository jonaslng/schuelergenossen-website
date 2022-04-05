import { useContext, useState } from "react";
import React from "react";
import { CartContext } from "./App";

export default function Cart(props) {
  return (
    <div className="cart-wrapper">
      {props.cart.length < 1 ? (
        <p className="nothing">Der Warenkorb ist leer</p>
      ) : (
        props.cart.forEach((element) => {
          return <div className="cartContent"></div>;
        })
      )}
    </div>
  );
}
