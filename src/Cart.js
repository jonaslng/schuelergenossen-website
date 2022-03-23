import { useState } from "react";
import React from "react";

export default function Cart(props) {
  return (
    <div className="cart-wrapper">
      {props.content.length < 1 ? (
        <p className="nothing">Der Warenkorb ist leer</p>
      ) : props.content.forEach(element => {
        return (
          <div className="cartContent">
              
          </div>
        )
      })}
    </div>
  );
}
