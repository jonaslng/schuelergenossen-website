import { createContext, useState } from "react";
import "./App.css";
import { IconButton } from "@mui/material";
import React from "react";
import Start from "./Start";
import Shop from "./Shop";
import Potato from "./Potato";
import Team from "./Team";
import Press from "./Press";
import { DarkMode, LightMode, Menu, ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import Cart from "./Cart";
//FIREBASE STUFF
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getRemoteConfig, getValue } from "firebase/remote-config";
import { useContext } from "react";
import { useCookies, CookiesProvider } from "react-cookie";

const firebaseConfig = {
  apiKey: "AIzaSyCEB-YFsuy3zWzHgYuAXfTPdkjvvaNZMwM",
  authDomain: "schuelergenossen.firebaseapp.com",
  projectId: "schuelergenossen",
  storageBucket: "schuelergenossen.appspot.com",
  messagingSenderId: "921467958815",
  appId: "1:921467958815:web:02f00a8f38d81c2e62472a",
  measurementId: "G-XQG0V0NJH4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const remoteConfig = getRemoteConfig(app);
remoteConfig.settings.minimumFetchIntervalMillis = 3600000;

export const CartContext = createContext();

function App() {
  const [site, setSite] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies();
  if (cookies.cart === null || cookies.cart === undefined) {
    console.log("initialize cookie");
    let expiresOn = new Date();
    expiresOn.setMonth(expiresOn.getMonth() + 1);
    setCookie("cart", [{}], { expires: expiresOn });
    console.log("Cookies: " + cookies.cart);
  }
  const [theme, setTheme] = useState(1); /* 1=DARK 0=WHITE */
  const [cart, setCart] = useState(cookies.cart == null ? [] : cookies.cart);
  const content = [
    <Start setSite={setSite} />,
    <Shop setCart={setCart} cart={cart} />,
    <Potato />,
    <Team />,
    <Press />,
    <Cart setCart={setCart} cart={cart} />,
  ];
  console.log(cookies.cart);

  return (
    <CookiesProvider>
      <div className="App">
        <div className="navbar">
          <img
            src="https://image.jimcdn.com/app/cms/image/transf/dimension=380x10000:format=png/path/s5716ff8e3a6d452a/image/i047f7ead75260886/version/1455016429/image.png"
            className="nav-logo"
          />

          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="menu-items">
            <p className="nav-text-mobile" onClick={() => setSite(0)}>
              Start
            </p>
            <p className="nav-text-mobile" onClick={() => setSite(1)}>
              Shop
            </p>
            <p className="nav-text-mobile" onClick={() => setSite(2)}>
              Potato Company
            </p>
            <p className="nav-text-mobile" onClick={() => setSite(3)}>
              Team
            </p>
            <p className="nav-text-mobile" onClick={() => setSite(4)}>
              Presse
            </p>
          </div>

          <p className="nav-text" onClick={() => setSite(0)}>
            Start
          </p>
          <p className="nav-text" onClick={() => setSite(1)}>
            Shop
          </p>
          <p className="nav-text" onClick={() => setSite(2)}>
            Potato Company
          </p>
          <p className="nav-text" onClick={() => setSite(3)}>
            Team
          </p>
          <p className="nav-text" onClick={() => setSite(4)}>
            Presse
          </p>
          <ShoppingCart
            className="shopnav"
            fontSize="large"
            onClick={() => setSite(5)}
          />
        </div>
        <div className="content">{content[site]}</div>
        <div className="footer">
          <div className="links">
            <a href="#">Impressum</a>
            <a href="#">Liefer- und Zahlungsbedingungen</a>
            <a href="#">Datenschutz</a>
            <a href="#">Sitemap</a>
          </div>
          <div className="logos">
            <img src="https://image.jimcdn.com/app/cms/image/transf/none/path/s5716ff8e3a6d452a/image/id8bc6088024ca222/version/1455017898/image.png" />
            <img src="https://image.jimcdn.com/app/cms/image/transf/none/path/s5716ff8e3a6d452a/image/i926460b117a009b4/version/1455017895/image.jpg" />
            <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=192x10000:format=jpg/path/s5716ff8e3a6d452a/image/i2a947f03d33e9fc5/version/1572624098/image.jpg" />
            <img src="https://image.jimcdn.com/app/cms/image/transf/none/path/s5716ff8e3a6d452a/image/id39c7394a52c8d70/version/1455017893/image.png" />
            <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=132x10000:format=png/path/s5716ff8e3a6d452a/image/i7719b35ea8fcecc3/version/1594040594/image.png" />
            <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=192x10000:format=jpg/path/s5716ff8e3a6d452a/image/i3d5bebedc0defdb7/version/1594040684/image.jpg" />
          </div>
        </div>
      </div>
    </CookiesProvider>
  );
}

export default App;
