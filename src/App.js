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
import { Link } from "react-router-dom";

import Cart from "./Cart";
//FIREBASE STUFF
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getRemoteConfig, getValue } from "firebase/remote-config";
import { useContext } from "react";
import { useCookies, CookiesProvider } from "react-cookie";
import { getStoredCart } from "./functions/shopFunctions";
import { Footer } from "./Footer";

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
  const [cart, setCart] = useState(getStoredCart(cookies.cart));
  const [theme, setTheme] = useState(1); /* 1=DARK 0=WHITE */

  const content = [
    <Start setSite={setSite} />,
    <Shop setCart={setCart} cart={cart} />,
    <Potato />,
    <Team />,
    <Press />,
    <Cart setCart={setCart} cart={cart} />,
  ];

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
        <Footer />
      </div>
    </CookiesProvider>
  );
}

export default App;
