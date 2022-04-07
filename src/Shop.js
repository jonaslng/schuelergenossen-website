import Product from "./Product";
import { useState } from "react";
import ProductPreview from "./productPreview";
import { NotificationsProvider } from "@mantine/notifications";
import { useCookies } from "react-cookie";

const product_data = require("./products.json");

export default function Shop(props) {
  const products = product_data;
  const [shownProduct, setShownProduct] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies();

  const addToCart = (productId) => {
    if (cookies.cart === []) return;
    console.log("Add new Product " + productId + " to cart");
    let temp = cookies.cart;
    console.log("temp vorher " + temp);
    for (let index = 0; index < cookies.cart.length; index++) {
      if (temp[index] === productId) {
        temp[index].number++;
      }
      if (index === cookies.cart.length - 1) {
        temp.push({ id: productId, number: 1 });
      }
    }
    if (temp === []) {
      temp.push({ id: productId, number: 1 });
    }
    console.log("temp: " + temp);
    setCookie("cart", temp);
  };

  const shopProducts = [];
  products.forEach((product) =>
    shopProducts.push(
      <ProductPreview
        name={product.name}
        photo={product.photo}
        badge={product.badge}
        price={product.price}
        available={product.available}
        showProduct={(data) => setShownProduct(data)}
        id={product.id}
        description={product.description}
        features={product.features}
        shipping_time={product.shipping_time}
      />
    )
  );
  const shopNormal = <div>{shopProducts}</div>;
  return (
    <NotificationsProvider>
      <div className="shop-wrapper">
        {shownProduct === null ? <p className="shop-header">Shop</p> : null}
        <div className="shop-items">
          {shownProduct === null ? (
            shopNormal
          ) : (
            <Product
              title={shownProduct.name}
              description={shownProduct.description}
              photoURL={shownProduct.photo}
              price={shownProduct.price}
              badge={shownProduct.badge}
              shipping={shownProduct.shipping_time}
              addToCart={() => addToCart(shownProduct.id)}
            />
          )}
        </div>
      </div>
    </NotificationsProvider>
  );
}
