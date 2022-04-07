import { useContext, useState } from "react";
import React from "react";
import { CartContext } from "./App";
import {
  Stepper,
  Button,
  Group,
  MantineProvider,
  ScrollArea,
  Table,
  Center,
  Avatar,
  Text,
  Badge,
  Menu,
  ActionIcon,
} from "@mantine/core";
import { useCookies, CookiesProvider } from "react-cookie";
import {
  ShoppingCart,
  AddressBook,
  CreditCard,
  Check,
  Clock,
  Minus,
  Plus,
  Trash,
} from "tabler-icons-react";
const product_data = require("./products.json");

export default function Cart(props) {
  const [active, setActive] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies();
  const nextStep = () =>
    setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const removeFromCart = (productId) => {
    if (cookies.cart === []) return;
    console.log("Removing Product " + productId + " from Cart");
    let temp = cookies.cart.map((e, i) => {
      if (e.id === productId) {
        if (e.number === 1) {
          temp.splice(i, 1);
        } else {
          temp[i].number--;
        }
      }
    });
    setCookie("cart", temp);
  };
  const addToCart = (productId) => {
    if (cookies.cart === []) return;
    console.log("Adding new Item " + productId + " to cart");
    let temp = cookies.cart;
    temp.foreach((e, i) => {
      if (e.id === productId) {
        temp[i].number++;
      }
    });
    setCookie("cart", temp);
  };
  const deleteFromCart = (productId) => {
    if (cookies.cart === []) return;
    console.log("Delete Product " + productId + " from cart");
    let temp = cookies.cart;
    temp.foreach((e, i) => {
      if (e.id === productId) {
        temp.splice(i, 1);
      }
    });
    setCookie("cart", temp);
  };
  const list = cookies.cart.map((e, i) => {
    <tr>
      <td>
        <Group spacing="sm">
          <Avatar size={40} src={product_data[e.id].photo} radius={40} />
          <div>
            <Text size="sm" weight={500}>
              {product_data[e.id].name}
            </Text>
          </div>
        </Group>
      </td>
      <td>
        <Badge
          leftSection={<Clock size={18} style={{ margin: "4px 0 0 0" }} />}
          color="indigo"
        >
          {product_data[e.id].shipping_time}
        </Badge>
      </td>
      <td>
        <Text>{product_data[e.id].price}</Text>
      </td>
      <td>{cookies.cart[i].number}</td>
      <td>
        <Group>
          <ActionIcon
            variant="filled"
            onClick={() => removeFromCart(product_data[e.id].id)}
          >
            <Minus />
          </ActionIcon>
          <ActionIcon
            variant="filled"
            onClick={() => addToCart(product_data[e.id].id)}
          >
            <Plus />
          </ActionIcon>
          <ActionIcon
            variant="filled"
            onClick={() => deleteFromCart(product_data[e.id].id)}
          >
            <Trash color="red" />
          </ActionIcon>
        </Group>
      </td>
    </tr>;
  });

  const cartContent = (
    <ScrollArea>
      <Center>
        <Table style={{ width: "80%" }}>
          <thead>
            <tr>
              <th>Produkt</th>
              <th>Bemerkungen</th>
              <th>Preis</th>
              <th>Stück</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </Table>
      </Center>
    </ScrollArea>
  );

  const cart = (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <Stepper
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        style={{ margin: "20px 40px 20px 40px" }}
      >
        <Stepper.Step label="Warenkorb" icon={<ShoppingCart />}>
          {cartContent}
        </Stepper.Step>
        <Stepper.Step label="Adresse angeben" icon={<AddressBook />}>
          Adresse angeben
        </Stepper.Step>
        <Stepper.Step label="Bezahlen" icon={<CreditCard />}>
          Bezahlen
        </Stepper.Step>
        <Stepper.Step label="Bestätigen" icon={<Check />}>
          Bestätigen
        </Stepper.Step>
        <Stepper.Completed>Completed</Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Zurück
        </Button>
        <Button onClick={nextStep}>Weiter</Button>
      </Group>
    </MantineProvider>
  );

  return (
    <>
      {cookies.cart.length < 1 ? (
        <p className="nothing">Der Warenkorb ist leer</p>
      ) : (
        cart
      )}
    </>
  );
}
