import { useContext, useState, useRef } from "react";
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
  TextInput,
  Container,
  Select,
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
import { validate } from "email-butler";
import Pay from "./Pay";

const product_data = require("./products.json");
const postalCodes = require("postal-codes-js");
var countriesInformation = require("countries-information");

export default function Cart(props) {
  const [active, setActive] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies();

  //DATEN EINGEBEN
  //ADRESSE ANGEBEN
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [firma, setFirma] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [stadt, setStadt] = useState("");
  const [bundesland, setBundesLand] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const country = useRef(null);
  const [err, setErr] = useState("");

  console.log(country);

  const address = (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <Container
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Group style={{ margin: "20px 0 10px 0" }}>
          <TextInput
            value={vorname}
            onChange={(e) => setVorname(e.target.value)}
            label="Vorname"
            required
            error={err === "no_vn" ? "Bitte Vorname angeben" : false}
          />
          <TextInput
            value={nachname}
            onChange={(e) => setNachname(e.target.value)}
            label="Nachname"
            required
            error={err === "no_nn" ? "Bitte Nachname angeben" : false}
          />
        </Group>
        <TextInput
          value={firma}
          onChange={(e) => setFirma(e.target.value)}
          label="Firma"
        />
        <TextInput
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
          label="Adresse"
          required
          error={err === "no_address" ? "Bitte Adresse angeben" : false}
        />
        <TextInput
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
          label="Adresszusatz"
        />
        <Group>
          <TextInput
            value={postalcode}
            onChange={(e) => setPostalcode(e.target.value)}
            label="Postleitzahl"
            required
            error={err === "postal_false" ? "Falsche Postleitzahl" : false}
          />
          <TextInput
            value={stadt}
            onChange={(e) => setStadt(e.target.value)}
            label="Ort"
            required
            error={err === "no_stadt" ? "Bitte Stadt angeben" : false}
          />
        </Group>
        <TextInput
          value={bundesland}
          onChange={(e) => setBundesLand(e.target.value)}
          label="Bundesland"
        />
        <TextInput
          value={telefon}
          onChange={(e) => setTelefon(e.target.value)}
          label="Telefon"
        />
        <TextInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="E-Mail"
          required
          error={err === "email_false" ? "Falsche Email Adresse" : false}
        />
        <Select
          label="Land"
          searchable
          nothingFound="Kein Land gefunden"
          data={[
            "🇦🇱 Albania",
            "🇦🇩 Andorra",
            "🇧🇾 Belarus",
            "🇧🇪 Belgium",
            "🇧🇬 Bulgaria",
            "🇩🇰 Denmark",
            "🇩🇪 Germany",
            "🇪🇪 Estonia",
            "🇫🇴 Faroe Islands",
            "🇫🇮 Finland",
            "🇫🇷 France",
            "🇬🇪 Georgia",
            "🇬🇮 Gibraltar",
            "🇬🇷 Greece",
            "🇮🇪 Ireland",
            "🇮🇸 Iceland",
            "🇮🇹 Italy",
            "🇭🇷 Croatia",
            "🇱🇻 Latvia",
            "🇱🇮 Liechtenstein",
            "🇱🇹 Lithuania",
            "🇱🇺 Luxembourg",
            "🇲🇹 Malta",
            "🇲🇨 Monaco",
            "🇲🇪 Montenegro",
            "🇲🇸 Montserrat",
            "🇳🇱 Netherlands",
            "🇳🇴 Norway",
            "🇦🇹 Austria",
            "🇵🇱 Poland",
            "🇵🇹 Portugal",
            "🇷🇴 Romania",
            "🇸🇲 San Marino",
            "🇸🇪 Sweden",
            "🇨🇭 Switzerland",
            "🇸🇰 Slovakia",
            "🇸🇮 Slovenia",
            "🇪🇸 Spain",
            "🇨🇿 Czech Republic",
            "🇹🇷 Turkey",
            "🇺🇦 Ukraine",
            "🇭🇺 Hungary",
            "🇬🇧 United Kingdom",
            "🇨🇾 Cyprus",
          ]}
          ref={country}
          required
          error={err === "no_land" ? "Bitte Land angeben" : false}
        />
      </Container>
    </MantineProvider>
  );

  const checkData = (vn, nn, adresse, ort, postleitzahl, e_mail, land) => {
    if (vn === "" || vn === " ") {
      setErr("no_vn");
      return false;
    }
    if (nn === "" || nn === " ") {
      setErr("no_nn");
      return false;
    }
    if (adresse === "" || adresse === " ") {
      setErr("no_address");
      return false;
    }
    if (ort === "" || ort === " ") {
      setErr("no_stadt");
      return false;
    }
    if (
      ![
        "🇦🇱 Albania",
        "🇦🇩 Andorra",
        "🇧🇾 Belarus",
        "🇧🇪 Belgium",
        "🇧🇬 Bulgaria",
        "🇩🇰 Denmark",
        "🇩🇪 Germany",
        "🇪🇪 Estonia",
        "🇫🇴 Faroe Islands",
        "🇫🇮 Finland",
        "🇫🇷 France",
        "🇬🇪 Georgia",
        "🇬🇮 Gibraltar",
        "🇬🇷 Greece",
        "🇮🇪 Ireland",
        "🇮🇸 Iceland",
        "🇮🇹 Italy",
        "🇭🇷 Croatia",
        "🇱🇻 Latvia",
        "🇱🇮 Liechtenstein",
        "🇱🇹 Lithuania",
        "🇱🇺 Luxembourg",
        "🇲🇹 Malta",
        "🇲🇨 Monaco",
        "🇲🇪 Montenegro",
        "🇲🇸 Montserrat",
        "🇳🇱 Netherlands",
        "🇳🇴 Norway",
        "🇦🇹 Austria",
        "🇵🇱 Poland",
        "🇵🇹 Portugal",
        "🇷🇴 Romania",
        "🇸🇲 San Marino",
        "🇸🇪 Sweden",
        "🇨🇭 Switzerland",
        "🇸🇰 Slovakia",
        "🇸🇮 Slovenia",
        "🇪🇸 Spain",
        "🇨🇿 Czech Republic",
        "🇹🇷 Turkey",
        "🇺🇦 Ukraine",
        "🇭🇺 Hungary",
        "🇬🇧 United Kingdom",
        "🇨🇾 Cyprus",
      ].includes(land.toString())
    ) {
      console.log(land);
      setErr("no_land");
      return false;
    }

    let isEmailValid = validate(e_mail.toString());
    if (!isEmailValid) {
      setErr("email_false");
      return false;
    } else {
      let alpha2 = countriesInformation.getCountryInfoByName(
        land.toString().split(" ")[1]
      );
      if (postalcode !== "" && postalcode !== " ") {
        return true;
      } else {
        setErr("postal_false");
        return false;
      }
    }
  };

  const nextStep = () => {
    if (active === 1) {
      if (
        checkData(
          vorname,
          nachname,
          address,
          stadt,
          postalcode,
          email,
          country.current.value
        )
      ) {
        setActive((current) => (current < 4 ? current + 1 : current));
        setErr("");
      }
    } else {
      setActive((current) => (current < 4 ? current + 1 : current));
      setErr("");
    }
  };
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const removeFromCart = (productId) => {
    if (props.cart === []) return;
    console.log("Removing Product " + productId + " from Cart");
    let temp = props.cart;
    const checkElement = (e) => {
      if (e.id === productId) {
        return true;
      } else return false;
    };
    let index = temp.findIndex(checkElement);
    if (temp[index].number === 1) {
      temp.splice(index, 1);
    } else {
      temp[index] = {
        id: productId,
        number: temp[index].number - 1,
      };
    }

    props.setCart(temp);
    setCookie("cart", temp);
  };
  const addToCart = (productId) => {
    console.log("Adding new Item " + productId + " to cart");
    let temp = props.cart.map((e) => {
      if (e.id === productId) {
        return {
          id: productId,
          number: e.number + 1,
        };
      } else {
        return e;
      }
    });
    props.setCart(temp);
    setCookie("cart", temp);
  };
  const deleteFromCart = (productId) => {
    console.log("Delete Product " + productId + " from cart");
    if (props.cart.length === 1) {
      props.setCart([]);
      setCookie("cart", []);
      return;
    }
    let temp = props.cart;
    const checkElement = (e) => {
      if (e.id === productId) {
        return true;
      } else return false;
    };
    let index = temp.findIndex(checkElement);
    temp.splice(index, 1);
    props.setCart(temp);
    setCookie("cart", temp);
  };
  const list = props.cart.map((e) => {
    return (
      <tr>
        <td>
          <Group spacing="sm">
            <Avatar size={40} src={product_data[e.id - 1].photo} radius={40} />
            <div>
              <Text size="sm" weight={500}>
                {product_data[e.id - 1].name}
              </Text>
            </div>
          </Group>
        </td>
        <td>
          <Badge
            leftSection={<Clock size={18} style={{ margin: "4px 0 0 0" }} />}
            color="indigo"
          >
            {product_data[e.id - 1].shipping_time}
          </Badge>
        </td>
        <td>
          <Text>{product_data[e.id - 1].price}</Text>
        </td>
        <td>{e.number}</td>
        <td>
          <Group>
            <ActionIcon variant="filled" onClick={() => removeFromCart(e.id)}>
              <Minus />
            </ActionIcon>
            <ActionIcon variant="filled" onClick={() => addToCart(e.id)}>
              <Plus />
            </ActionIcon>
            <ActionIcon variant="filled" onClick={() => deleteFromCart(e.id)}>
              <Trash color="red" />
            </ActionIcon>
          </Group>
        </td>
      </tr>
    );
  });

  console.log(props.cart);

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

  //CART
  const cart = (
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <Stepper
        active={active}
        breakpoint="sm"
        style={{ margin: "20px 40px 20px 40px" }}
      >
        <Stepper.Step label="Warenkorb" icon={<ShoppingCart />}>
          {cartContent}
        </Stepper.Step>
        <Stepper.Step label="Adresse angeben" icon={<AddressBook />}>
          {address}
        </Stepper.Step>
        <Stepper.Step label="Bezahlen" icon={<CreditCard />}>
          <Pay />
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
      {props.cart.length < 1 ? (
        <p className="nothing">Der Warenkorb ist leer</p>
      ) : (
        cart
      )}
    </>
  );
}
