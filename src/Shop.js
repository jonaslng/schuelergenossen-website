import Product from "./Product";
import { useState } from "react";
import ProductPreview from "./productPreview";
import { NotificationsProvider } from "@mantine/notifications";
import { useCookies } from "react-cookie";
import { showNotification } from "@mantine/notifications";
import { ShoppingCartPlus } from "tabler-icons-react";
import { MantineProvider } from "@mantine/core";

const product_data = require("./products.json");

export default function Shop(props) {
  const products = product_data;
  const [shownProduct, setShownProduct] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies();

  const addToCart = (productId) => {
    console.log("Add new Product " + productId + " to cart");
    let temp = props.cart;
    if (
      temp.every((e) => {
        return e.id !== productId;
      })
    ) {
      temp.push({ id: productId, number: 1 });
    } else {
      temp = props.cart.map((e) => {
        if (e.id === productId) {
          return {
            id: productId,
            number: e.number + 1,
          };
        } else {
          return e;
        }
      });
    }
    props.setCart(temp);
    setCookie("cart", temp);
    console.log("new cart: " + props.cart);
    showNotification({
      id: "new_product_" + productId,
      autoClose: 2000,
      title:
        "Produkt " +
        products[productId - 1].name +
        " zum Warenkorb hinzugefügt",
      icon: <ShoppingCartPlus />,
      color: "teal",
    });
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
    <MantineProvider theme={{ colorScheme: "dark" }}>
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
    </MantineProvider>
  );
}
