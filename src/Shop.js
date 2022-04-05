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
  console.log(cookies.cart);

  const addToCart = (productId) => {
    let temp = props.cart;
    let index = temp.map((object) => object[0]).indexOf(productId);
    console.log(index);
    if (index == null || index < 0) temp.push([productId, 1]);
    else {
      temp[index][1]++;
    }
    let expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 28);
    setCookie("cart", temp, { expires: expireDate });
    props.setCart(temp);
  };

  const shopProducts = [];
  console.log(shownProduct);
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
