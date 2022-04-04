import Product from "./Product";
import { useState } from "react";
import ProductPreview from "./productPreview";
import { NotificationsProvider } from "@mantine/notifications";
const product_data = require("./products.json");

export default function Shop(props) {
  const products = product_data;
  const [shownProduct, setShownProduct] = useState(null);
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
            />
          )}
        </div>
      </div>
    </NotificationsProvider>
  );
}
